# Food Rescue Backend

## Introduction

This repository holds the backend code for the "Food Rescue" platform, a capstone project developed by Hongyu and Karen at Rocket Academy. The platform is inspired by "Too Good To Go" and aims to reduce food waste by connecting customers with restaurants and stores to purchase surplus unsold food. Focused on serving Hong Kong, the app features dummy seller data extrapolated from Google Maps.

## Quick Start Guide

Before you begin, ensure you have Node.js and PostgreSQL installed on your system. This project uses Sequelize as the ORM and PostGIS for geographical data extensions.

### Prerequisites

- Node.js (preferably the latest LTS version)
- PostgreSQL (with PostGIS extension supported)
- npm (Node Package Manager)

### Setup Instructions

1. Clone the repository to your local machine.

2. Install the necessary npm packages:

   ```bash
   npm i
   ```

3. Create the database with Sequelize:

   ```bash
   npx sequelize db:create
   ```

4. Open the SQL query terminal for PostgreSQL and enable the PostGIS extension:

   ```sql
   CREATE EXTENSION IF NOT EXISTS postgis;
   ```

5. Return to the initial terminal to run migrations and seed the database:

   ```bash
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

6. Start the backend server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, it will listen for incoming requests at the configured port. The API endpoints can be accessed through `localhost` or the designated host.

## Contributing

Contributions to the "Food Rescue" project are welcome. Please ensure to follow the existing code structure and adhere to the coding standards set for this project.

---

Thank you for being a part of our effort to create a more sustainable and waste-conscious community in Hong Kong.
