async function sendComment(){
    let commentText = document.getElementById("comment");
    let commentName = document.getElementById("commentName");
    let commentPost = document.getElementById("commentPost");
    let commentCompany = document.getElementById("commentCompany");
    if (commentText.value!=null && commentText.value!=="" && commentName.value!=null && commentName.value!=="") {
        let comment = {};
        comment.name = commentName.value;
        comment.post = commentPost.value;
        comment.company = commentCompany.value;
        comment.text = commentText.value;
        let result = await axios.post(`${env.URL}/comment`, comment).then(r => {
            let parent = document.getElementById("selfComment");
            parent.innerHTML = createElemComment(r.data);
            commentText.value = "";
            commentName.value = "";
            commentPost.value = "";
            commentCompany.value = "";
        });
    }
}

async function getComments(elem, page){
    let comments = await axios.get(`${env.URL}/comment/`+page).then(result=>{
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

    let selfComment = document.getElementById("selfComment");
    selfComment.innerHTML = ""
}

function createElemComment(data){
    return `<div class="card mb-2">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${data.full}</h5>
                            <p class="card-text">${data.text}</p>
                            <p class="card-text"><small class="text-muted">${data.updatedAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>`
}




