Food Rescue

This is the capstone project of Hongyu and Karen at Rocket Academy.

The inspiration to build this site came from Too Good To Go, an application in Europe and US that connects customers to restaurants and stores that have surplus unsold food. Our app is based in Hong Kong, with dummy seller data sourced from google map.

Please run the following commands:

`npm i`

`npx sequelize db:create`

Then, run the following command in SQL query terminal:

`CREATE EXTENSION IF NOT EXISTS postgis; `

Switch back to previous terminal and

`npx sequelize db:migrate`

`npx sequelize db:seed:all`

`npm start`
