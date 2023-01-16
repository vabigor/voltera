const commentService = require('../service/commentService')

class CommentController {

    async getAll(req, res){
        await commentService.getAll(req, res, (result)=>res.json(result))
    }

    async create(req, res){
        await commentService.create(req, res);
    }
}

module.exports = new CommentController()
