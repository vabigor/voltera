class EntityController {

    async project(req, res){
        res.render("entity/project", {
            title: "Проекты"
        });
    }
}

module.exports = new EntityController()
