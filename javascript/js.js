let featuersLinks = document.querySelector('.moreFeatuers');
let companyLinks = document.querySelector('.moreCompany');
// media screen 
let xMediam = window.matchMedia("(max-width: 1022px)");
let xSmall = window.matchMedia("(max-width: 860px)");
let xMobile = window.matchMedia("(max-width: 650px)"); // mobile

let xNavgation = window.matchMedia('(max-width: 700px');// start small navgation

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

// start control navigation on mobile
function mediaNavigatioMObile(nav){
    if(nav.matches){
        document.querySelector('.linksAll').style.position = "absolute";
        document.querySelector('.linksAll').style.right = "-300px";
        document.querySelector('.linksAll').style.top = "0";
        document.querySelector('.linksAll').style.width = "200px";
        document.querySelector('.linksAll').style.height = "100vh";
        document.querySelector('.linksAll').style.padding = "0 20px";
        document.querySelector('.linksAll').style.backgroundColor = "#ffffff";
        document.querySelector('.linksAll').style.transition = ".5s";
        
        /* add btn close */
        let btnClose = document.createElement('div'); // div btn
        let closeIcon = document.createElement('img'); // img
        closeIcon.src = '../images/icon-close-menu.svg';
        closeIcon.alt = 'img close';
        btnClose.appendChild(closeIcon);

        document.querySelector('.toggle').addEventListener('click', () => {
            document.querySelector('.linksAll').style.display = "grid";
            document.querySelector('.linksAll').style.position = "absolute";
            document.querySelector('.linksAll').style.right = "0";
            document.querySelector('.linksLeft').style.display = "grid";
            document.querySelector('nav').style.display = "grid";
            let navgationLInks = document.querySelector('.linksAll')
            navgationLInks.insertBefore(btnClose, navgationLInks.firstChild);
            // close all links
            btnClose.addEventListener('click', () => {
                document.querySelector('.linksAll').style.right = "-300px";
            })
        })
    } else{
        document.querySelector('.linksAll').style.position = "";
        document.querySelector('.linksAll').style.right = "";
        document.querySelector('.linksAll').style.top = "";
        document.querySelector('.linksAll').style.width = "";
        document.querySelector('.linksAll').style.height = "";
        document.querySelector('.linksAll').style.padding = "";
        document.querySelector('.linksAll').style.backgroundColor = "";
        document.querySelector('.linksAll').style.transition = "";
        document.querySelector('.toggle').addEventListener('click', () => {
            document.querySelector('.linksAll').style.display = "";
            document.querySelector('.linksAll').style.position = "";
            document.querySelector('.linksAll').style.right = "";
            document.querySelector('.linksLeft').style.display = "";
            document.querySelector('nav').style.display = "";
        })
    }
};

mediaNavigatioMObile(xNavgation);
xNavgation.addListener(mediaNavigatioMObile);

// console.log(document.querySelector('.toggle'));