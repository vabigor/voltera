// const commentService = require("../service/commentService");

class HomeController {

    async get(req, res){
        // await commentService.getAll(req, res, true);
        res.json({ASD:"123"})
    }
}

module.exports = new HomeController()
