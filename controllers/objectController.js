class ObjectController{

    async get(req, res){
        res.render("object.hbs", {
            title: "Наши объекты",
            description: "Наши объекты voltera.by",
        });
    }

}

module.exports = new ObjectController()
