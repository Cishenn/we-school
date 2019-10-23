'use strict';
// 学校logo
var logos = document.querySelectorAll('.logo .swiper-slide');
logos.forEach(function (logo, logoIndex) {
    logo.style.left = String(logoIndex * (98 + 73)) + 'px';
    logo.style.top = 0;
});

function schoolNext() {
    logos.forEach(function (logo, logoIndex) {
        if (logos[logos.length - 1].offsetLeft > 1120) {
            logo.style.left = String(logo.offsetLeft - 1120 - 78) + 'px';
            logo.style.top = 0;
        }
        console.log(logo.style.left);
    });
    currentLogoPage++;
}
function schoolPrev() {
    logos.forEach(function (logo, logoIndex) {
        if (logos[0].offsetLeft == 0) {
            return;
        }
        logo.style.left = String(logo.offsetLeft + 1120 + 78) + 'px';
        logo.style.top = 0;
        console.log(logo.style.left);
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



