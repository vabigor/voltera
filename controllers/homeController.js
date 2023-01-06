const {Comment} = require("../models/models");

class HomeController {

    async get(req, res){
        const comments = await Comment.findAndCountAll({
            limit: 5,
            offset: 0
        }).then(result=>{
            result.rows.forEach(r=>{
                r.dataValues.updatedAt = r.dataValues.updatedAt.toLocaleDateString()+' '+r.dataValues.updatedAt.toLocaleTimeString();
            })
            res.render("home.hbs", {
                title: "ВольтЭра",
                head: "ВольтЭра",
                comments: result.rows,
                countPage: (Math.trunc(result.count/5)) + (result.count%5)
            });
        });
    }
}

module.exports = new HomeController()
