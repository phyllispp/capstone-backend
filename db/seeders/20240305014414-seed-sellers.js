"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sellers",
      [
        {
          name: "Paper Stone Bakery",
          email: "321@321.com",
          address: "320 Des Voeux Rd Central, Sheung Wan, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1505988596977 22.286595799897206)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ming Wah Bakery",
          email: "312@312.com",
          address: "29 Soy St, Mong Kok, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.17186074836886 22.316346506777904)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bakehouse",
          email: "1234@1234.com",
          address: "44 Hankow Rd, Tsim Sha Tsui, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.17102850774651 22.29764843810558)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Plumcot",
          email: "1243@1243.com",
          address: "G/F, 10A Sun Chun St, Tai Hang, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.19230919229571 22.27824998270117)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Proof",
          email: "212@212.com",
          address: "14 Tsun Yuen Street, Happy Valley, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.18743919649953 22.267577939328127)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Dang Wen Li by Dominique Ansel",
          email: "413@413.com",
          address:
            "Ocean Terminal, Harbour City, 3-27 Canton Road, Hong Kong Shop OT G63A, G/F, Tsim Sha Tsui, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1681499067452 22.2954459984565)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Gontran Cherrier",
          email: "524@524.com",
          address:
            "Unit #B205 - B207, 18 Salisbury Rd, Tsim Sha Tsui, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.17425337866803 22.294681083182393)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Levian Bakery",
          email: "696@696.com",
          address: "Shop G63, 1 Discovery Bay Rd, Discovery Bay",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.01689270999071 22.296110367172762)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mayse Artisan Bakery",
          email: "876@876.com",
          address: "G/F No, 64 Sam Wo Rd, Tai Mei Tuk Tsuen",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.23270344068678 22.473212318782775)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pane e Latte",
          email: "763@763",
          address: "G/F, U-c Court, 25 Stanley Market Rd, Stanley, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.21160164232694 22.219023151636403)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "IL CIBO Italian Restaurant",
          email: "1432@1432.com",
          address: "55 Tai Tsun St, Tai Kok Tsui, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.16068971145489 22.321577393258345)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mr Wolf",
          email: "1423@1423.com",
          address:
            "5/F, Crawford House, 70 Queen's Road Central, Central, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.15565563828004 22.28264311985108)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "West Villa Restaurant",
          email: "2413@2413.com",
          address: "Taikoo Shing, Tai Koo Shing Rd, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.21698789778453 22.28659474245864)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Crystal Lotus",
          email: "2431@2431.com”",
          address: "Hong Kong Disneyland Hotel, Lantau Island, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.04385093208839 22.307364452587176)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Pici",
          email: "273@273.com",
          address: "G/F, 45-55 Cadogan St, Kennedy Town, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.12632996580777 22.28200602781313)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Yardbird",
          email: "792@792",
          address:
            "Winsome House G/F, 154-158 Wing Lok St, Sheung Wan, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.14917803743748 22.287421518839896)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Burger Joys",
          email: "428@428.com",
          address:
            "Shop E, G/F, De Fenwick 42-50 Lockhart Road, Wan Chai, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.17051064305684 22.27888281592374)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ichiran",
          email: "509@509.com",
          address:
            "Shop F-I, G/F, Lockhart House, Block A, 440 Jaffe Road, Causeway Bay, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.18136956441828 22.280687019943688)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Mak's Noodle",
          email: "002@002.com",
          address: "G/F, 77 Wellington St, Central, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.15458814305686 22.283824852769513)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Australia Dairy Company",
          email: "846@846.com",
          address: "47 Parkes Street, Jordan, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1705620239471 22.3047961587404)"
          ),
          photo:
            "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg",
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Market Place”",
          email: "123@123.com",
          address:
            "Shop No 8 B2, Langham Place, 8 Argyle St, Mong Kok, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.16859839536527 22.318632554896972)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "7-Eleven",
          email: "132@132com",
          address: "Shop G20, 38-42 Fuk Chi St, Hung Hom, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.18754398815446 22.305609336822815)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "YATA",
          email: "231@231.com",
          address:
            "B1, Harbour North Phase 2, 123 Java Road, North Point, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.20094128098339 22.292655273836967)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Fusion",
          email: "213@213.com",
          address:
            "Shop 22-23, 1/F, Lantau Island, Caribbean Bazaar, 1 Kin Tung Rd, Tung Chung, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(113.948735645787 22.291128306546614)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "City'Super",
          email: "190@190.com",
          address:
            "B1/F, Times Square, 1 Matheson Street, Causeway Bay, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.18198615231711 22.278235115303204)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "ParknShop",
          email: "703@703.com",
          address:
            "Whampoa Garden Site 3 Block 3, 120 Baker St, Whampoa Garden",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1870275103607 22.310603920643274)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Marks & Spencer",
          email: "458@458.com",
          address:
            "B/F, Central Tower, 28 Queen's Rd Central, Central, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1568316371366 22.28134315303115)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Welcome",
          email: "416@416.com",
          address: "26 Jordan Rd, Jordan, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.17060963109144 22.30546720001806)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sogo Freshmart",
          email: "932@932.com",
          address: "Sogo, 555 Hennessy Road, Causeway Bay, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.18430950178345 22.280453058464268)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Great Food Hall",
          email: "195@195.com",
          address:
            "LG 1, Two Pacific Place, 88 Queensway, Admiralty, Hong Kong",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(114.1643597676633 22.277792979854482)"
          ),
          photo:
            "https://cdn.dribbble.com/users/371199/screenshots/17237982/media/ee4ef1e8d7fd193aacfb85df9d284c1c.jpg?resize=400x300&vertical=center",
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Amsterdam Cafe",
          email: "4321@4321.com",
          address: "481 Amsterdam Ave, New York, NY 10024",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(-73.97629833441108 40.785465514075305)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sugar Wood",
          email: "4312@4312.com",
          address: "157 Prince St, New York, NY 10012",
          location: Sequelize.fn(
            "ST_GeomFromText",
            "POINT(-74.00114167504448 40.72594222546786)"
          ),
          photo:
            "https://www.creativefabrica.com/wp-content/uploads/2023/08/01/Bakery-logo-retro-concept-design-Graphics-75892620-1.jpg",
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
