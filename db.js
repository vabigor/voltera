const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.LOCAL==='true' ? process.env.DB_LOCAL_NAME : process.env.DB_NAME, // Название БД
    process.env.LOCAL==='true' ? process.env.DB_LOCAL_USER : process.env.DB_USER, // Пользователь
    process.env.LOCAL==='true' ? process.env.DB_LOCAL_PASSWORD : process.env.DB_PASSWORD, // ПАРОЛЬ
    {

        dialect: 'mysql',
        host: process.env.LOCAL===true ? process.env.DB_LOCAL_HOST : process.env.DB_HOST,
        port: process.env.LOCAL===true ? process.env.DB_LOCAL_PORT : process.env.DB_PORT,
        // scheme: process.env.DB_SCHEME
    }
)
