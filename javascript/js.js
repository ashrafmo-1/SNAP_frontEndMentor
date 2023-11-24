let featuersLinks = document.querySelector('.moreFeatuers');
let companyLinks = document.querySelector('.moreCompany');
// media screen 
let xMediam = window.matchMedia("(max-width: 1022px)");
let xSmall = window.matchMedia("(max-width: 860px)");

function featuersToggleActive() {
    featuersLinks.classList.toggle('active');
}

function companyToggleActive() {
    companyLinks.classList.toggle('active');
}

function mediaMediam(x) {
    if(x.matches) {
        // edit image style width
        document.querySelector('.landingImage').style.width = "300px";
        document.querySelector('.landing .textcontent .title').style.fontSize = '60px';
        document.querySelector('.container').style.width = '90%';
    }else{
        document.querySelector('.landingImage').style.width = "";
        document.querySelector('.landing .textcontent .title').style.fontSize = '';
        document.querySelector('.container').style.width = '';
    }
};
mediaMediam(xMediam)
xMediam.addListener(mediaMediam)

function mediaSmall(X) {
    if(X.matches) {
        // edit image style width
        document.querySelector('.landingImage').style.width = "240px";
        document.querySelector('.landing .textcontent .title').style.fontSize = '45px';
        document.querySelectorAll('.allCatigorys .img').forEach((ele) => {
            ele.style.width = '50px'
        })
    }else{
        document.querySelector('.landingImage').style.width = "";
        document.querySelector('.landing .textcontent .title').style.fontSize = '';
        document.querySelectorAll('.allCatigorys .img').forEach((ele) => {
            ele.style.width = ''
        })
    }
}
mediaSmall(xSmall)
xSmall.addListener(mediaSmall)