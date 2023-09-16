require('dotenv').config();

const config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS || 'root',
    database: 'PROJECT_OSTEN_MOOVE',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3002,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};

module.exports = config;