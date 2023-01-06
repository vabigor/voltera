require('dotenv').config()
const express = require('express')
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require("path");
const Handlebars = require("handlebars");

const PORT = process.env.PORT || 5000

const app = express()
hbs.registerPartials(__dirname + "/views/partials");
app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views/layouts",
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
// app.set("views", "contact"); // установка пути к представлениям
app.use(cors())
app.use(express.json())
app.use('/', router)

app.use(express.static(path.join(__dirname, 'static')))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e){
        console.log()
    }
}

start()
