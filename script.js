let aboutButton = document.querySelector(".aboutBtn");
let projectButton = document.querySelector(".projectBtn");
let contactButton = document.querySelector(".contactBtn");
let expButton = document.querySelector(".expBtn");
let middlePic = document.querySelector(".pic");

function changeImage(src) {
    document.getElementById('mainImage').src = src;
    console.log(src);
}

aboutButton.addEventListener("click",() => {
    changeImage('./images/lft_top.png');
    var contEach = document.querySelectorAll(".eachContent");
    contEach.forEach(function(contEach) {
        contEach.style.display = 'none';
    });
    document.querySelector(".aboutContent").style.display = "block";
});

projectButton.addEventListener("click",() => {
    changeImage('./images/lft_btm.png');
    var contEach = document.querySelectorAll(".eachContent");
    contEach.forEach(function(contEach) {
        contEach.style.display = 'none';
    });
    document.querySelector(".projectContent").style.display = "block";

});

contactButton.addEventListener("click",() => {
    changeImage('./images/rht_btm.png');
    var contEach = document.querySelectorAll(".eachContent");
    contEach.forEach(function(contEach) {
        contEach.style.display = 'none';
    });
    document.querySelector(".contactContent").style.display = "block";
});

expButton.addEventListener("click",() => {
    changeImage('./images/rht_top.png');
    var contEach = document.querySelectorAll(".eachContent");
    contEach.forEach(function(contEach) {
        contEach.style.display = 'none';
    });
    document.querySelector(".experienceContent").style.display = "block";
});



// var allBtns = document.querySelectorAll(".btns");
// for (var i=0; i<allBtns.length; i++) {
//     console.log(i);
// }

// var allBtns = document.querySelectorAll(".btns");
// for (var i = 0; i < allBtns.length; i++) {
//     (function(index) {
//         allBtns[index].addEventListener('click', function() {
//             alert('btn ' + (index + 1) + ' clicked');
//         });
//     })(i);
// }

