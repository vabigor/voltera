class EntityController {

    async project(req, res){
        res.render("entity/project.hbs", {
            title: "Проектирование"
        });
    }

    async budgeting(req, res){
        res.render("entity/budgeting.hbs", {
            title: "Составление смет"
        });
    }

    async electricInstallationWork(req, res){
        res.render("entity/electric_installation_work.hbs", {
            title: "Электромонтажные работы любой сложности"
        });
    }

    async electrophysicalMeasurements(req, res){
        res.render("entity/electrophysical_measurements.hbs", {
            title: "Электрофизические измерения"
        });
    }

    async operativeMaintenance(req, res){
        res.render("entity/operative_maintenance.hbs", {
            title: "Оперативно техническое обслуживание"
        });
    }

    async postWarrantyService(req, res){
        res.render("entity/post_warranty_service.hbs", {
            title: "Послегарантийное обслуживание и текущий ремонт электроустановок"
        });
    }

    async certificates(req, res){
        res.render("entity/certificates.hbs", {
            title: "Сертификаты"
        });
    }
}

module.exports = new EntityController()
