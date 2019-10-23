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

//index-swiper
var items= document.querySelectorAll('.swiper-wrap .img-wrap .imgs');
items.forEach(function (logo, logoIndex) {
    logo.style.left = String(logoIndex * (350)) + 'px';
    logo.style.top = 0;
    if(logo.offsetLeft===350){
        logo.style.width=String(500)+'px';
        logo.style.height=String(375)+'px';
    }
});
function prev(){
    if(items[items.length-1].offsetLeft===350){
        return;
    }
    items.forEach(function (logo, logoIndex) {
        logo.style.left = String(logo.offsetLeft -350) + 'px';
        logo.style.top = 0;
    });
}
function next(){
    if(items[0].offsetLeft===350){
        return;
    }
    items.forEach(function (logo, logoIndex) {
        logo.style.left = String(logo.offsetLeft + 350) + 'px';
        logo.style.top = 0;
    });
}


