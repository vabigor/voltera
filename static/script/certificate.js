function modalCertificateChoose(file, title){
    let modalContent = document.getElementById("modalContent");
    modalContent.innerHTML=`<img width="780" height="1000" src=${env.URL+":"+env.PORT}/certificates/${file}>`
    let modalTitle = document.getElementById("modalTitle");
    modalTitle.innerHTML = `<h1 class="modal-title fs-5" id="staticBackdropLabel">${title}</h1>`
}
