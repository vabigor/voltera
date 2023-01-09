const {Comment} = require("../models/models");

class HomeController {

    async get(req, res){
        const comments = await Comment.findAndCountAll({
            limit: 5,
            offset: 0,
            order: [['createdAt', 'DESC']]
        }).then(result=>{
            result.rows.forEach(r=>{
                r.dataValues.updatedAt = r.dataValues.updatedAt.toLocaleDateString()+' '+r.dataValues.updatedAt.toLocaleTimeString();
                let val = [];
                val.push(r.dataValues.company);
                val.push(r.dataValues.post);
                val.push(r.dataValues.name);
                r.dataValues.full = "";
                for (let i = 0; i<val.length; i++){
                    if (val[i]!==null && val[i]!==undefined && val[i].trim()!==""){
                        r.dataValues.full+=val[i].concat(", ");
                    }
                }
                r.dataValues.full = r.dataValues.full.slice(0, r.dataValues.full.length-2)
            })
            let countPage = Math.trunc(result.count/5);
            countPage = result.count%5!==0 ? countPage+1 : countPage;
            res.render("home.hbs", {
                title: "ВольтЭра",
                head: "ВольтЭра",
                comments: result.rows,
                countPage: countPage
            });
        });
    }
}

module.exports = new HomeController()
