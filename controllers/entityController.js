class EntityController {

    async project(req, res){
        res.render('entity/project.hbs')
    }
}

module.exports = new EntityController()
