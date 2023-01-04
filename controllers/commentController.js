const {Comment} = require('../models/models')

class CommentController {

    async getAll(req, res){
        const comments = await Comment.findAll()
        return res.json(comments)
    }

    async create(req, res){
        const body = req.body
        const comment = await Comment.create(body)
        return res.json(comment)
    }
}

module.exports = new CommentController()
