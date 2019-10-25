'use strict';
// 学校logo
var logos = document.querySelectorAll('.logo .swiper-slide');
logos.forEach(function (logo, logoIndex) {
    logo.style.left = String(logoIndex * (98 + 73)) + 'px';
    logo.style.top = 0;
});

var logoCount = logos.length;
var pageSize = 7;
var maxPageCount = Math.ceil(logoCount / pageSize);
var currentLogoPage = 0;

function schoolNext() {
    if (currentLogoPage >= maxPageCount - 1) {
        return;
    }

    logos.forEach(function (logo, logoIndex) {
        var currentLeft = Number(logo.style.left.replace('px', ''));
        logo.style.left = String(currentLeft - 1120 - 78) + 'px';
        logo.style.top = 0;
    });
    currentLogoPage++;
}

function schoolPrev() {
    if (currentLogoPage === 0) {
        return;
    }

    logos.forEach(function (logo, logoIndex) {
        var currentLeft = Number(logo.style.left.replace('px', ''));
        logo.style.left = String(currentLeft + 1120 + 77) + 'px';
        logo.style.top = 0;
    });
    currentLogoPage--;
}

//企业logo
var companyLogos = document.querySelectorAll('.company-wrap .logo .img');
companyLogos.forEach(function (logo, logoIndex) {
    logo.style.left = String(logoIndex * (247)) + 'px';
    logo.style.top = 0;
});
function companyNext() {
    if (companyLogos[companyLogos.length - 1].offsetLeft < 1127) {
        return;
    }
    companyLogos.forEach(function (logo, logoIndex) {
        logo.style.left = String(logo.offsetLeft - 1127 - 109) + 'px';
        logo.style.top = 0;
    });
}
function companyPrev() {
    if (companyLogos[0].offsetLeft == 0) {
        return;
    }
    companyLogos.forEach(function (logo, logoIndex) {
        logo.style.left = String(logo.offsetLeft + 1127 + 109) + 'px';
        logo.style.top = 0;
    });
}

//投资logo
var orgLogos = document.querySelectorAll('.org-wrap .logo .img');
orgLogos.forEach(function (logo, logoIndex) {
    logo.style.left = String(logoIndex * (247)) + 'px';
    logo.style.top = 0;
});
function orgNext() {
    orgLogos.forEach(function (logo, logoIndex) {
        if (orgLogos[orgLogos.length - 1].offsetLeft < 1127) {
            return;
        } else {
            logo.style.left = String(logo.offsetLeft - 1127 - 109) + 'px';
            logo.style.top = 0;
        }
    });
}
function orgPrev() {
    if (orgLogos[0].offsetLeft == 0) {
        return;
    }
    orgLogos.forEach(function (logo, logoIndex) {
        logo.style.left = String(logo.offsetLeft + 1127 + 109) + 'px';
        logo.style.top = 0;
    });
}

// view
var platformFunctions = Array.from(document.querySelectorAll('.swiper-wrap .img-wrap .imgs-wrapper'))
    .map((item, itemIndex) => {
        return {
            node: item,
            offset: itemIndex
        };
    });
function renderPlatformFunctions() {
    platformFunctions.forEach(platformFunction => {
        if (platformFunction.offset === -1) {
            // TODO 
            platformFunction.node.style.left = -500 + 'px';
            platformFunction.node.style.top = 47 + 'px';
            platformFunction.node.style.animate = "(box3, 200)";
        }
        else if (platformFunction.offset === 0) {
            // TODO
            platformFunction.node.style.left = 0;
            platformFunction.node.style.top = 37 + 'px';
            var img = platformFunction.node.querySelector('.imgs .image');
            img.style.width = 400 + 'px';
            img.style.height = 300 + 'px';
            platformFunction.node.style.zIndex = -1;
            var title = platformFunction.node.querySelector('.imgs .title');
            title.style.fontSize = 22 + 'px';
            title.style.color = '#999999';
            var info = platformFunction.node.querySelector('.imgs .info');
            info.style.display = "none";
            platformFunction.node.style.transition = "all 1";
        }
        else if (platformFunction.offset === 1) {
            // TODO
            platformFunction.node.style.left = 320 + 'px';
            platformFunction.node.style.top = 0;
            platformFunction.node.style.zIndex = 100;
            var img = platformFunction.node.querySelector('.imgs .image');
            img.style.width = 500 + 'px';
            img.style.height = 375 + 'px';
            img.style.boxShadow="1px 3px 5px #aaa";
            var title = platformFunction.node.querySelector('.imgs .title');
            title.style.fontSize = 26 + 'px';
            title.style.color = '#666666';
            var info = platformFunction.node.querySelector('.imgs .info');
            info.style.display = "block";
        }
        else if (platformFunction.offset === 2) {
            platformFunction.node.style.left = 810 + 'px';
            platformFunction.node.style.top = 37 + 'px';
            platformFunction.node.style.zIndex = -2;
            var img = platformFunction.node.querySelector(".imgs .image");
            img.style.width = 400 + 'px';
            img.style.height = 300 + 'px';
            var title = platformFunction.node.querySelector('.imgs .title');
            title.style.fontSize = 22 + 'px';
            title.style.color = "#999999";
            var info = platformFunction.node.querySelector('.imgs .info');
            info.style.display = "none";
            platformFunction.node.style.transition = "with 2s";
        }
        else {
            // TODO
            platformFunction.node.style.left = 1230 + 'px';
            platformFunction.node.style.top = 47 + 'px';
        }
    })
}
renderPlatformFunctions();
function pIndex(){
        platformFunctions.forEach(platformFunction=>{
            if(platformFunction.offset===1){
                platformFunction.node.style.zIndex=1;
            }
            platformFunction.node.style.zIndex=-1;    
        })
}
function nIndex(){
    platformFunctions.forEach(platformFunction=>{
        if(platformFunction.offset===0){
            platformFunction.node.style.zIndex=1;
        }
        if(platformFunction.offset===1){
            platformFunction.node.style.zIndex=2;
        }
        
        platformFunction.node.style.zIndex=-3;
        
    })
}
//PlatformFunction
function prev() {
    if (platformFunctions[0].offset === -1) {
        return;
    }

    platformFunctions.forEach(platformFunction => {
        platformFunction.offset--;
        var img;
        if(platformFunction.offset+1===0){
            platformFunction.node.style.animation = "leftl 0.5s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="midtoleftimg 0.5s ease .1s";
            pIndex();
        }
        if(platformFunction.offset===0){
            platformFunction.node.style.animation = "midtoleft 0.5s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="midtoleftimg 0.5s ease .1s";
            pIndex();
        }
        if(platformFunction.offset===1){
            platformFunction.node.style.animation = "righttomid 0.5s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="righttomidimg 0.5s ease .1s";
            pIndex();
        }
        if(platformFunction.offset===2){
            platformFunction.node.style.animation = "rright 0.5s ease .1s";
            pIndex();
        }
    });

    setTimeout(function() {
        renderPlatformFunctions();
    }, 500);
}
function next() {
    if (platformFunctions[0].offset === 1) {
        return;
    }
    var img;
    platformFunctions.forEach(platformFunction => {
        platformFunction.offset++;
        if(platformFunction.offset===0){
            platformFunction.node.style.animation="lleft 0.5s ease .1s";
            nIndex();
        }
        if(platformFunction.offset===1){
            platformFunction.node.style.animation = "lefttomid 0.5s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="lefttomidimg 0.5s ease .1s";
            nIndex();
        }
        if(platformFunction.offset===2){
            platformFunction.node.style.animation = "midtoright 0.45s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="midtorightimg 0.5s ease .1s";
            nIndex();
        }
        if(platformFunction.offset-1===2){
            platformFunction.node.style.animation = "rightr 0.5s ease .1s";
            img = platformFunction.node.querySelector(".imgs .image");
            img.style.animation="rightr 0.4s ease .1s";
            nIndex();
        }
    });

    setTimeout(function() {
        renderPlatformFunctions();
    }, 500);
}


