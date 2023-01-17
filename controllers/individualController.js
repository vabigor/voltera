class IndividualController {

    async project(req, res){
        res.render("individual/project.hbs", {
            title: "Помощь в проектировании"
        });
    }

    async electrophysicalMeasurements(req, res){
        res.render("individual/electrophysical_measurements.hbs", {
            title: "Электрофизические измерения"
        });
    }

    async emergencyTechnicalWork(req, res){
        res.render("individual/emergency_technical_work.hbs", {
            title: "Аварийно-технические работы"
        });
    }

    async wiring(req, res){
        res.render("individual/wiring.hbs", {
            title: "Электромонтаж (квартиры, коттеджи)"
        });
    }

    async networkConnection(req, res){
        res.render("individual/network_connection.hbs", {
            title: "Подключение жилых домов к сети электро снабжения"
        });
    }

    async accompaniment(req, res){
        res.render("individual/accompaniment.hbs", {
            title: "Сопровождение"
        });
    }
}

module.exports = new IndividualController()
