require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT
  },
  test: {
    username: 'root',
    password: 'my-secret-pw',
    database: 'network_society',
    host: '172.17.0.2',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'my-secret-pw',
    database: 'network_society',
    host: '172.17.0.2',
    dialect: 'mysql'
  }
}
