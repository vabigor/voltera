function modalCertificateChoose(file, title){
    let modalContent = document.getElementById("modalContent");
    modalContent.innerHTML=`<img class="certificate-size" src=${env.URL+":"+env.PORT}/certificates/${file} alt="...">`
    let modalTitle = document.getElementById("modalTitle");
    modalTitle.innerHTML = `<h1 class="modal-title fs-5" id="staticBackdropLabel">${title}</h1>`
}
