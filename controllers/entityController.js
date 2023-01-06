class EntityController {

    async project(req, res){
        res.render("entity/project", {
            title: "Проекты"
        });
    }

    async certificates(req, res){
        res.render("certificates.hbs", {
            title: "Сертификаты"
        });
    }
}

module.exports = new EntityController()
