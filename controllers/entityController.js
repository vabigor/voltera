class EntityController {

    async project(req, res){
        res.render("entity/project.hbs", {
            title: "Помощь в проектировании для юридических лиц",
            description: "Помощь в проектировании для юридических лиц",
        });
    }

    async budgeting(req, res){
        res.render("entity/budgeting.hbs", {
            title: "Составление смет",
            description: "Составление смет",
        });
    }

    async electricInstallationWork(req, res){
        res.render("entity/electric_installation_work.hbs", {
            title: "Электромонтажные работы любой сложности",
            description: "Электромонтажные работы любой сложности",
        });
    }

    async electrophysicalMeasurements(req, res){
        res.render("entity/electrophysical_measurements.hbs", {
            title: "Электрофизические измерения для юридических лиц",
            description: "Электрофизические измерения для юридических лиц",
        });
    }

    async operativeMaintenance(req, res){
        res.render("entity/operative_maintenance.hbs", {
            title: "Оперативно техническое обслуживание",
            description: "Оперативно техническое обслуживание",
        });
    }

    async postWarrantyService(req, res){
        res.render("entity/post_warranty_service.hbs", {
            title: "Послегарантийное обслуживание и текущий ремонт электроустановок",
            description: "Послегарантийное обслуживание и текущий ремонт электроустановок",
        });
    }

    async certificates(req, res){
        res.render("entity/certificates.hbs", {
            title: "Сертификаты",
            description: "Сертификаты voltera.by",
        });
    }
}

module.exports = new EntityController()
