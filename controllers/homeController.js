const commentService = require("../service/commentService");

class HomeController {

    async get(req, res){
        await commentService.getAll(req, res, true);
    }
}

module.exports = new HomeController()
