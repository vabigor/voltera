class IndividualController {

    async project(req, res){
        res.render("individual/project", {
            title: "Проекты"
        });
    }
}

module.exports = new IndividualController()
