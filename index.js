require('dotenv').config()
const express = require('express')
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
// const sequelize = require('./db')
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

Handlebars.registerHelper('times', function(n, block) {
    let accum = '';
    for(let i = 0; i < n; i++)
        accum += block.fn(i);
    return accum;
});
Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        return options.fn(this);
    }
    return options.inverse(this);
});
Handlebars.registerHelper("inc", function(value) {
    let x = value;
    return parseInt(x) + 1;
});
Handlebars.registerHelper("url", function(value) {
    return process.env.URL+"/"+value
});
// Handlebars.registerHelper("url", function(value) {
//     if (value[0]==="/"){
//         value.slice(1,1)
//     }
//     return process.env.URL+":"+process.env.PORT+"/"+value
// });

app.use(cors())
app.use(express.json())
app.use('/', router)

// app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'static')))
// app.use(express.json()) *
// app.use(express.static(path.resolve(__dirname, 'static'))) *

const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e){
        console.log()
    }
}

start()
