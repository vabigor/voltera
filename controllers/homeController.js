class HomeController {

    async get(req, res){
        res.render("home", {
            title: "ВольтЭра",
            head: "ВольтЭра"
        });
    }
}

module.exports = new HomeController()
