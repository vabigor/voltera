class MainController {

    async get(req, res){
        res.render("main.hbs")
    }
}

module.exports = new MainController()
