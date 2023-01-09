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
                r.dataValues.updatedAt = r.dataValues.updatedAt.toLocaleDateString()+' '+r.dataValues.updatedAt.toLocaleTimeString()
                let val = [];
                val.push(r.dataValues.company)
                val.push(r.dataValues.post)
                val.push(r.dataValues.name)
                r.dataValues.full = "";
                for (let i = 0; i<val.length; i++){
                    if (val[i].trim()!==""){
                        r.dataValues.full+=val[i].concat(", ");
                    }
                }
                r.dataValues.full = r.dataValues.full.slice(0, r.dataValues.full.length-2)
            })
            return res.json(result)
        })
    }

    async create(req, res){
        const body = req.body
        const comment = await Comment.create(body)
        comment.dataValues.updatedAt = comment.dataValues.updatedAt.toLocaleDateString()+' '+comment.dataValues.updatedAt.toLocaleTimeString()
        let val = []
        val.push(comment.dataValues.company)
        val.push(comment.dataValues.post)
        val.push(comment.dataValues.name)
        comment.dataValues.full = "";
        for (let i = 0; i<val.length; i++){
            if (val[i].trim()!==""){
                comment.dataValues.full+=val[i].concat(", ");
            }
        }
        comment.dataValues.full = comment.dataValues.full.slice(0, comment.dataValues.full.length-2)
        return res.json(comment)
    }
}

module.exports = new CommentController()
