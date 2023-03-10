const commentService = require("../service/commentService");

class HomeController {

    async get(req, res){
        await commentService.getAll(req, res, (data, res)=>{
            let descr = ["Электромонтажные работы"]
            let countPage = Math.trunc(data.count/5);
            countPage = data.count%5!==0 ? countPage+1 : countPage;
            res.render("home.hbs", {
                title: "ВольтЭра",
                description: "Электромонтажные работы",
                comments: data.rows,
                countPage: countPage
            });
        });
    }
}

module.exports = new HomeController()
