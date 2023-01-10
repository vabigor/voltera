const {Comment} = require("../models/models");

class CommentService{

    async getAll(req, res, resView){
        let page = 0;
        if (typeof req.params['page'] !== "undefined") {
            page = req.params.page
        }
        let limit = 5;
        await Comment.findAndCountAll({
            limit: limit,
            offset: page*limit,
            order: [['createdAt', 'DESC']]

        }).then(result=>{
            result.rows.forEach(r=>{
                this.#formatCommentDate(res, req, r)
                this.#formatCommentFullName(r)
            })
            resView?this.#responseView(res, result):res.json(result)
        });
    }

    async create(req, res){
        const body = req.body
        const comment = await Comment.create(body)
        this.#formatCommentDate(res, req, comment);
        this.#formatCommentFullName(comment)
        return res.json(comment)
    }

    #formatCommentDate(res, req, data){
        data.dataValues.updatedAt = data.dataValues.updatedAt.toLocaleDateString()+' '+data.dataValues.updatedAt.toLocaleTimeString();
    }

    #formatCommentFullName(data){
        let val = [];
        val.push(data.dataValues.company);
        val.push(data.dataValues.post);
        val.push(data.dataValues.name);
        data.dataValues.full = "";
        for (let i = 0; i<val.length; i++){
            if (val[i]!==null && val[i]!==undefined && val[i].trim()!==""){
                data.dataValues.full+=val[i].concat(", ");
            }
        }
        data.dataValues.full = data.dataValues.full.slice(0, data.dataValues.full.length-2)
    }

    #responseView(res, data){
        let countPage = Math.trunc(data.count/5);
        countPage = data.count%5!==0 ? countPage+1 : countPage;
        res.render("home.hbs", {
            title: "ВольтЭра",
            head: "ВольтЭра",
            comments: data.rows,
            countPage: countPage
        });
    }

}

module.exports = new CommentService();
