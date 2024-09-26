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

$(document).on('click', function(e) {
    if($(e.target).closest('.experienceContent, .portfolioOptns').length === 0 ) {
        // alert('asdsad');
        // if($(".CallBack_dd_option").hasClass('active')){
            $(".experienceContent, .contactContent, .projectContent, .aboutContent").hide();
            // $('#mainImage').src('./images/normal.png')
            changeImage('./images/normal.png')
        // }
    }
});

// $(document).ready(function(){

//     var currentDate = new date();
//     alert(currentDate)
// })

// var currentDate = new Date();
// const joiningDate = "15th sept 2022";


// $(document).ready(function() {
//     // Define date1 (custom date)
//     var date1 = new Date("2022-09-15");

//     // Get today's date for date2
//     var date2 = new Date();

//     // Calculate the time difference in milliseconds
//     var timeDifference = date2 - date1;

//     // Convert the time difference to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
//     var dayDifference = timeDifference / (1000 * 3600 * 24);

//     console.log("Difference in days: " + Math.floor(dayDifference));
// });


function dateDifference(date1, date2) {
    var years, months, days;

    // Calculate the year difference
    years = date2.getFullYear() - date1.getFullYear();

    // Calculate the month difference
    months = date2.getMonth() - date1.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate the day difference
    days = date2.getDate() - date1.getDate();
    if (days < 0) {
        months--;
        // Get the number of days in the previous month
        var previousMonth = new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
        days += previousMonth;
        if (months < 0) {
            years--;
            months += 12;
        }
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

$(document).ready(function() {
    // Define date1 (custom date)
    var date1 = new Date("2022-09-15");

    // Get today's date for date2
    var date2 = new Date();

    // Get the difference in years, months, and days
    var difference = dateDifference(date1, date2);

    // Display the result
    // console.log();
    $(".crntExp").text(difference.years + " years, " + difference.months + " months, " + difference.days + " days")
});


