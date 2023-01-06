async function sendComment(){
    let commentText = document.getElementById("comment");
    let commentName = document.getElementById("commentName");
    if (commentText==null || commentText==="" || commentName==null || commentName===""){

    }else{
        let comment={};
        comment.name=commentName.value;
        comment.text=commentText.value;
        let result = await axios.post(`${env.URL+":"+env.PORT}/comment`, comment).then(r=>{
            let parent = document.getElementById("selfComment");
            parent.innerHTML = createElemComment(r.data);
            commentText.value = "";
            commentName.value = "";
        });
    }
}

async function getComments(elem, page){
    let comments = await axios.get(`${env.URL+":"+env.PORT}/comment/`+page).then(result=>{
        let html = "";
        result.data.rows.forEach(r=>{
            html += createElemComment(r);
        })
        let parent = document.getElementById("allComment");
        parent.innerHTML = html;
    })
    let pageItems = document.getElementsByClassName("page-link");
    for (let pageItem of pageItems) {
        pageItem.classList.remove("active")
    }
    elem.classList.add("active")
}

function createElemComment(data){
    return `<div style="border: 1px solid gray; border-radius: 8px;box-shadow: 2px 2px 2px 2px rgb(200,200,200); margin-bottom: 10px">
                <div style="border-bottom: 1px solid silver; border-radius: 8px 8px 0 0; padding-left: 5px; background-color: rgb(248,248,248)">
                    <h3>${data.name}</h3>
                </div>
                <div style="padding-left: 5px">
                    <p>${data.text}</p>
                </div>
                <div style="border-top: 1px solid silver; padding-left: 5px; border-radius: 0 0 8px 8px; background-color: rgb(248,248,248)">
                    ${data.updatedAt}
                </div>
            </div>`
}
