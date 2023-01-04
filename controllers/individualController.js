class IndividualController {

    async project(req, res){
        res.render('individual/project.hbs')
    }
}

module.exports = new IndividualController()
