class ObjectController{

    async get(req, res){
        res.render("object.hbs", {
            title: "Наши объекты"
        });
    }

}

module.exports = new ObjectController()
