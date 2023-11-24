let featuersLinks = document.querySelector('.moreFeatuers');
let companyLinks = document.querySelector('.moreCompany');
// media screen 
let xMediam = window.matchMedia("(max-width: 1022px)");
let xSmall = window.matchMedia("(max-width: 860px)");
let xMobile = window.matchMedia("(max-width: 650px)"); // mobile

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
mediaMediam(xMediam);
xMediam.addListener(mediaMediam);

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
        });
    };
};
mediaSmall(xSmall);
xSmall.addListener(mediaSmall);


function mediaMobile(X) {
    if(X.matches) {
        // edit image style lication
        document.querySelector('.landingImage').style.display = "none";
        document.querySelector('.textcontent').style.display = "flex";
        document.querySelector('.textcontent').style.justifyContent = 'center'
        document.querySelector('.textcontent').style.alignItems = 'center'
        document.querySelector('.textcontent').style.flexDirection = 'column'
        document.querySelector('.textcontent').style.height = '100vh'

        // image top
        document.querySelector('.landingImageMobile').style.display = 'block';
        document.querySelector('.landingImageMobile').style.width = '100%';
        document.querySelector('.landingImageMobile').style.marginTop = '50px';
    }else{
        document.querySelector('.landingImage').style.display = "block";
        document.querySelector('.textcontent').style.display = "";
        document.querySelector('.textcontent').style.justifyContent = ''
        document.querySelector('.textcontent').style.alignItems = ''
        document.querySelector('.textcontent').style.flexDirection = ''
        document.querySelector('.textcontent').style.height = ''
        // image top
        document.querySelector('.landingImageMobile').style.display = '';
    }
}
mediaMobile(xMobile);
xMobile.addListener(mediaMobile);