const {Comment} = require('../models/models')
const Handlebars = require("handlebars");
const hbs = require("hbs");

class CommentController {

    async getAll(req, res){


        // res.render("home.hbs", {
        //     fruit: [ "apple", "lemon", "banana", "grape"]
        // });

        // const source = document.getElementById('store-template').html;
        // const comments = await Comment.findAll().then(c=>{
            // res.render("partials/comment.hbs", {
            //     title2: "Мои контакты",
            //     emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
            //     phone: "+1234567890"
            // });
        // });

        // Handlebars.registerPartial(
        //     "person",
        //     "{{person.name}} is {{person.age}} years old.\n"
        // )

        // return  Handlebars.compile("Name: {{name}}");
        // return res.json(comments)

        // res.render("comment.hbs", {
        //     title: "Мои контакты",
        //     emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        //     phone: "+1234567890"
        // });
    }

    async create(req, res){
        const body = req.body
        const comment = await Comment.create(body)
        return res.json(comment)
    }
}

module.exports = new CommentController()
