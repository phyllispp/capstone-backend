set -e
psql -c 'CREATE EXTENSION IF NOT EXISTS postgis;'
npx sequelize db:migrate
npx sequelize db:seed:all