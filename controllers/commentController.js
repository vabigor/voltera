const {Comment} = require('../models/models')

class CommentController {

    async getAll(req, res){
        let {page} = req.params
        return await Comment.findAndCountAll({
            limit: 5,
            offset: page,
            order: [['createdAt', 'DESC']]
        }).then(result=>{
            result.rows.forEach(r=>{
                r.dataValues.updatedAt = r.dataValues.updatedAt.toLocaleDateString()+' '+r.dataValues.updatedAt.toLocaleTimeString();
            })
            return res.json(result)
        })
    }

    async create(req, res){
        const body = req.body
        const comment = await Comment.create(body)
        return res.json(comment)
    }
}

module.exports = new CommentController()
