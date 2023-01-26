class IndividualController {

    async project(req, res){
        res.render("individual/project.hbs", {
            title: "Помощь в проектировании для физических лиц",
            description: "Помощь в проектировании для физических лиц",
        });
    }

    async electrophysicalMeasurements(req, res){
        res.render("individual/electrophysical_measurements.hbs", {
            title: "Электрофизические измерения для физических лиц",
            description: "Электрофизические измерения для физических лиц",
        });
    }

    async wiring(req, res){
        res.render("individual/wiring.hbs", {
            title: "Электромонтаж (квартиры, коттеджи)",
            description: "Электромонтаж квартиры коттеджи",
        });
    }

    async networkConnection(req, res){
        res.render("individual/network_connection.hbs", {
            title: "Подключение жилых домов к сети электро снабжения",
            description: "Подключение жилых домов к сети электро снабжения",
        });
    }
}

module.exports = new IndividualController()
