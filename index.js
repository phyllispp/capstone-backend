"use strict";
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: process.env.JWT_AUDIENCE,
  issuerBaseURL: process.env.JWT_ISSUER_BASE_URL,
});

//importing routers
const UserRouter = require("./routers/userRouter.js");
const CategoryRouter = require("./routers/categoryRouter.js");
const OrderRouter = require("./routers/orderRouter.js");
const NotificationRouter = require("./routers/notificationRouter.js");
const FeedRouter = require("./routers/feedRouter.js");
const CartRouter = require("./routers/cartRouter.js");
const BasketRouter = require("./routers/basketRouter.js");

//importing controllers
const UserController = require("./controllers/userController.js");
const CategoryController = require("./controllers/categoryController.js");
const OrderController = require("./controllers/orderController.js");
const NotificationController = require("./controllers/notificationController.js");
const FeedController = require("./controllers/feedController.js");
const CartController = require("./controllers/cartController.js");
const BasketController = require("./controllers/basketController.js");

//importing DB
const { Sequelize } = require("sequelize");
const db = require("./db/models/index.js");

const {
  basket,
  category,
  currentCart,
  feed,
  feedLike,
  feedReview,
  notification,
  order,
  orderedItem,
  seller,
  sellerLike,
  sellerReview,
  user,
} = db;

//initializing controllers
const userController = new UserController(user);
const categoryController = new CategoryController(
  category,
  seller,
  sellerLike,
  sellerReview,
  basket
);
const orderController = new OrderController(order, orderedItem, basket, seller);
const notificationController = new NotificationController(notification);
const feedController = new FeedController(feed, feedLike, feedReview, seller);
const cartController = new CartController(currentCart, basket);
const basketController = new BasketController(basket);

//initializing routers
const userRouter = new UserRouter(userController).routes();
const categoryRouter = new CategoryRouter(categoryController).routes();
const orderRouter = new OrderRouter(orderController, checkJwt).routes();
const notificationRouter = new NotificationRouter(
  notificationController
).routes();
const feedRouter = new FeedRouter(feedController, checkJwt).routes();
const cartRouter = new CartRouter(cartController, checkJwt).routes();
const basketRouter = new BasketRouter(basketController).routes();

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/notification", notificationRouter);
app.use("/feed", feedRouter);
app.use("/cart", cartRouter);
app.use("/basket", basketRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

//check baskets for expired or out of stock items
const checkBaskets = async () => {
  try {
    const currentTime = new Date();
    const basketsToUpdate = await basket.findAll({
      where: {
        [Sequelize.Op.or]: [
          {
            pickup_start_time: { [Sequelize.Op.lte]: currentTime },
          },
          {
            stock: { [Sequelize.Op.lt]: 1 },
          },
        ],
      },
    });
    for (const basket of basketsToUpdate) {
      await basket.update({ status: false });
    }
  } catch (error) {
    console.log(error);
  }
};
setInterval(checkBaskets, 30000);

//Set Up Stripe Checkout
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const CLIENT_URL = process.env.CLIENT_URL;

app.post("/pay", async (req, res) => {
  const { buyerId, totalPrice } = req.body;
  const price = totalPrice * 100;
  console.log(totalPrice);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "hkd",
          unit_amount: price,
          product_data: { name: "Food Basket" },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${CLIENT_URL}/order`,
    cancel_url: `${CLIENT_URL}/cart`,
    metadata: {
      buyerId: buyerId.toString(),
      totalPrice: totalPrice.toString(),
    },
  });
  console.log(session);
  // createOrder(buyerId, totalPrice);
  return res.json({ url: session.url });
});

//Use Stripe Webhooks to Listen for Payment Success
app.post(
  "/webhook",
  express.json({ type: "application/json" }),
  (request, response) => {
    console.log("Webhook route hit");
    const event = request.body;
    console.log("Event received:", event);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const buyerId = session.metadata.buyerId;
      const totalPrice = parseFloat(session.metadata.totalPrice);

      createOrder(buyerId, totalPrice);
      checkBaskets();
    }
    response.json({ received: true });
  }
);

const createOrder = async (buyerId, totalPrice) => {
  let transaction;
  console.log("I'm creating an order");
  try {
    transaction = await db.sequelize.transaction();

    const cartItems = await currentCart.findAll(
      {
        where: { buyerId: buyerId },
      },
      { transaction }
    );

    const newOrder = await order.create(
      {
        userId: buyerId,
        totalPrice: totalPrice,
      },
      { transaction }
    );
    console.log("cartItems", cartItems);

    for (const item of cartItems) {
      await orderedItem.create(
        {
          orderId: newOrder.id,
          basketId: item.basketId,
          stock: item.stock,
        },
        { transaction }
      );

      const updatedBasket = await basket.findByPk(item.basketId, {
        transaction,
      });
      if (updatedBasket && updatedBasket.stock >= item.stock) {
        await updatedBasket.update(
          { stock: updatedBasket.stock - item.stock },
          { transaction }
        );
      } else {
        throw new Error(`Insufficient stock for basketId: ${item.basketId}`);
      }
    }

    await currentCart.destroy(
      {
        where: { buyerId: buyerId },
      },
      { transaction }
    );

    await transaction.commit();
    console.log("Order created and cart cleared for buyerId:", buyerId);
  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error("Transaction Error:", error);
    console.log(error.message);
  }
};
