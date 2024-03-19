"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "baskets",
      [
        {
          seller_id: 1,
          title: "Sourdough Loaves",
          original_price: 20,
          discounted_price: 10,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 10,
          description:
            "Today's unsold sourdough, perfect for sandwiches or toast",
          allergens: "Contains gluten",
          photo:
            "https://homesteadandchill.com/wp-content/uploads/2020/03/gluten-free-sourdough-starter-recipe-bread-loaf.jpeg",
          weight_per_unit: 800,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 1,
          title: "Scones",
          original_price: 10,
          discounted_price: 5,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 10,
          description:
            "A mix of this morning's leftover cheese and blueberry scones",
          allergens: "Contains gluten, dairy",
          photo:
            "https://thebakingexplorer.com/wp-content/uploads/2023/01/CheeseScones6-Copy.webp”",
          weight_per_unit: 400,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 3,
          title: "Surprise Bag",
          original_price: 21,
          discounted_price: 6,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 1,
          description:
            "May contain an assortment of sandwiches, pastries, and/or other items",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg",
          weight_per_unit: 800,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 31,
          title: "Assorted Pastry Clear-Out",
          original_price: 40,
          discounted_price: 15,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 1,
          description:
            "A selection of today's unsold croissants, danishes, and muffins",
          allergens: "Contains gluten, dairy",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg",
          weight_per_unit: 2000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 32,
          title: "Assorted Pastry Clear-Out",
          original_price: 40,
          discounted_price: 15,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 1,
          description:
            "A selection of today's unsold croissants, danishes, and muffins",
          allergens: "Contains gluten, dairy",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg",
          weight_per_unit: 2000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 11,
          title: "Pizza",
          original_price: 30,
          discounted_price: 10,
          pickup_start_time: "2024-07-30 16:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 6,
          description:
            "Bags likely to contain same-day surplus slices that may be chilled and need to be reheated at home to be enjoyed! Please note variety is not guaranteed",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 12,
          title: "Surprise Bag",
          original_price: 20,
          discounted_price: 5,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 5,
          description:
            "This bag might include just side portions and/or whole dishes depending on what is available!",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://cdn.vox-cdn.com/thumbor/L5InthmwdMcT1xnGyv1GUZ5g_Uk=/0x0:6000x4000/1200x900/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/67099909/AdamFriedlander.NYC.Yumpling.MultipleDIshes_24.7.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 13,
          title: "Surprise Bag",
          original_price: 40,
          discounted_price: 12,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 10,
          description:
            "Delicious American food in a bag, you’ll find from BBQ ribs to burgers",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://cdn.vox-cdn.com/thumbor/L5InthmwdMcT1xnGyv1GUZ5g_Uk=/0x0:6000x4000/1200x900/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/67099909/AdamFriedlander.NYC.Yumpling.MultipleDIshes_24.7.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 14,
          title: "Dim Sum Evening Special",
          original_price: 30,
          discounted_price: 10,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 10,
          description:
            "A variety of today's unsold dim sum, including steamed buns, dumplings, and rice noodle rolls",
          allergens: "Gluten, shellfish, soy",
          photo:
            "https://www.seriouseats.com/thmb/aqSO6H5OXDoLCvgOjDymkwYpmcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110417-dim-sum-primary-d0459fb3eab14fd795e49f193df7d286.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 15,
          title: "Surprise Bag",
          original_price: 20,
          discounted_price: 5,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 1,
          description:
            "This bag might contain prepared food items, produce, and/or other surprises",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.instacart.com/company/wp-content/uploads/2023/08/grocery-delivery-to-hotel-hero.webp",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 20,
          title: "Dairy Delights",
          original_price: 20,
          discounted_price: 5,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 5,
          description:
            "Assorted dairy products close to the sell-by date, including milk and yogurt",
          allergens: "Contains dairy",
          photo:
            "https://thehill.com/wp-content/uploads/sites/2/2023/07/milk.jpg",
          weight_per_unit: 1500,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 21,
          title: "Fresh Fish",
          original_price: 18,
          discounted_price: 6,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 20,
          description:
            "This bag will usually contain raw fish, seafood, and/or other surprises. Enjoy!",
          allergens: "Seafood",
          photo:
            "https://www.usatoday.com/gcdn/-mm-/c514c14b303d781f411cbaec5870f0e84b1d19e4/c=0-349-3404-2272/local/-/media/2017/08/17/USATODAY/USATODAY/636385912845640499-28-Mercado-Livramento-09-Photo-credit-to-Camara-Municipal-de-Setubal.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 22,
          title: "Surprise Bag”",
          original_price: 25,
          discounted_price: 8,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 1,
          description:
            "A surprise bag will be filled with the delicious food that the store has left at the end of the day",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.instacart.com/company/wp-content/uploads/2023/08/grocery-delivery-to-hotel-hero.webp",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 23,
          title: "Surprise Bag",
          original_price: 25,
          discounted_price: 8,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 1,
          description:
            "A surprise bag will be filled with the delicious food that the store has left at the end of the day",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg”",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 7,
          title: "Surprise Bag",
          original_price: 25,
          discounted_price: 8,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 1,
          description:
            "A surprise bag will be filled with the delicious food that the store has left at the end of the day",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 8,
          title: "Croissant",
          original_price: 6,
          discounted_price: 4,
          pickup_start_time: "2024-07-30 16:00:00",
          pickup_end_time: "2024-07-30 18:00:00",
          stock: 8,
          description:
            "Indulge in the buttery, flaky perfection of our freshly baked croissants, a delightful treat that will transport you to a Parisian café with every bite.",
          allergens: "Contains gluten, wheat flour, milk, butter",
          photo:
            "https://cdn.tatlerasia.com/asiatatler/i/hk/2019/09/19164446-gontran-cherrier-croissant_cover_2000x1200.jpg",
          weight_per_unit: 200,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 15,
          title: "Veggie Box",
          original_price: 23,
          discounted_price: 11,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 5,
          description:
            "Discover the joy of cooking and elevate your meals with our Veggie Box, a curated selection of farm-fresh, seasonal vegetables that promote health, sustainability, and culinary creativity.",
          allergens: "No allergens",
          photo: "https://www.abelandcole.co.uk/media/6063_39658_m.jpg",
          weight_per_unit: 1500,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 16,
          title: "Famer's Fresh Meat Selection",
          original_price: 30,
          discounted_price: 23,
          pickup_start_time: "2024-07-30 18:00:00",
          pickup_end_time: "2024-07-30 20:00:00",
          stock: 20,
          description:
            "Savor the finest quality cuts of meat from our carefully curated selection, offering a flavorful range that will satisfy even the most discerning carnivores.",
          allergens: "Contains meat",
          photo:
            "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/06/iStock-857308908.jpg",
          weight_per_unit: 2000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 17,
          title: "Salad Box",
          original_price: 9,
          discounted_price: 6,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 2,
          description:
            "Experience a burst of freshness and nutrition with our Salad Box, a delightful ensemble of crisp greens, vibrant vegetables, and delicious toppings that will elevate your salad game to new heights.",
          allergens: "Contains celery and mustard",
          photo:
            "https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg",
          weight_per_unit: 400,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          seller_id: 18,
          title: "Surprise Bag",
          original_price: 11,
          discounted_price: 5,
          pickup_start_time: "2024-07-30 17:00:00",
          pickup_end_time: "2024-07-30 19:00:00",
          stock: 10,
          description:
            "A surprise bag will be filled with the delicious food that the store has left at the end of the day",
          allergens:
            "Your bag will be a surprise! If you have questions about allergens or specific ingredients, please ask the store",
          photo:
            "https://www.napoleonsbakery.com/wp-content/uploads/2023/07/Napoleons-Bakery-Donuts-Pastries-scaled.jpg",
          weight_per_unit: 1000,
          status: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("baskets", null, {});
  },
};
