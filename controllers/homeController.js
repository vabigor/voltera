const {Comment} = require("../models/models");

class HomeController {

    async get(req, res){
        const comments = await Comment.findAll().then(result=>{
            result.forEach(r=>{
                r.dataValues.updatedAt = r.dataValues.updatedAt.toLocaleDateString()+' '+r.dataValues.updatedAt.toLocaleTimeString();
            })
            res.render("home.hbs", {
                title: "ВольтЭра",
                head: "ВольтЭра",
                emails: result,
                phone: "+1234567890"
            });
        });
    }
}

module.exports = new HomeController()
