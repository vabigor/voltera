async function sendComment(){
    let commentText = document.getElementById("comment");
    let commentName = document.getElementById("commentName");
    if (commentText==null || commentText==="" || commentName==null || commentName===""){

    }else{
        let comment={};
        comment.name=commentName.value;
        comment.text=commentText.value;
        let result = await axios.post(`http://127.0.0.1:5000/comment`, comment).then(r=>{
            console.log(r.data)
            let parent = document.getElementById("selfComment");
            let html =
                `<div style="border: 1px solid gray; border-radius: 8px;box-shadow: 2px 2px 2px 2px rgb(200,200,200)">
                    <div style="border-bottom: 1px solid silver; border-radius: 8px 8px 0 0; padding-left: 5px; background-color: rgb(248,248,248)">
                        <h3>${r.data.name}</h3>
                    </div>
                    <div style="padding-left: 5px">
                        <p>${r.data.text}</p>
                    </div>
                    <div style="border-top: 1px solid silver; padding-left: 5px; border-radius: 0 0 8px 8px; background-color: rgb(248,248,248)">
                        ${r.data.updatedAt}
                    </div>
                </div>`
            parent.innerHTML =(html)
            commentText.value = "";
            commentName.value = "";
        });
    }
}

// document.addEventListener('DOMContentLoaded', getComment, false);

// document.addEventListener('DOMContentLoaded', init, false);
