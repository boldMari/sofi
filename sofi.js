function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function showCorrectAge () {
    const checkbox = document.querySelector('input[type="checkbox"]');
    const nodeList = document.querySelectorAll(".toggle-label");

    if (checkbox.checked) {
        //document.getElementById('toggle-label').innerHTML = "Honzík";
        getAge("1991/08/13 3:00:00");
        
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = "Honzík";
        }
    } else {
        getAge("2022/10/27 13:01:00");
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].innerHTML = "Sofia";
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', showCorrectAge);
});

function printResults (years, months, days, hours, minutes, seconds) {
    document.getElementById('years').innerHTML = years;
    document.getElementById('months').innerHTML = months;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

function changeLabels (years, months, days, hours, minutes, seconds) {
    if (years === 1) {
        document.getElementById('years-label').innerHTML = "year";
    } else {
       document.getElementById('years-label').innerHTML = "years"; 
    }

    if (months === 1) {
        document.getElementById('months-label').innerHTML = "month";
    } else {
       document.getElementById('months-label').innerHTML = "months"; 
    }

    if (days === 1) {
        document.getElementById('days-label').innerHTML = "day";
    } else {
       document.getElementById('days-label').innerHTML = "days"; 
    }

    if (hours === 1) {
        document.getElementById('hours-label').innerHTML = "hour";
    } else {
       document.getElementById('hours-label').innerHTML = "hours"; 
    }

    if (minutes === 1) {
        document.getElementById('minutes-label').innerHTML = "minute";
    } else {
       document.getElementById('minutes-label').innerHTML = "minutes"; 
    }

    if (seconds === 1) {
        document.getElementById('seconds-label').innerHTML = "second";
    } else {
       document.getElementById('seconds-label').innerHTML = "seconds"; 
    }

}

function showMilestones (years, months) {
    if (years === 0) {
        document.querySelector(".month-" + months).style.display = "block";
        document.querySelector(".oldtimer").style.display = "none";
    } else {
        document.querySelector(".oldtimer").style.display = "block";
        const nodeList = document.querySelectorAll(".milestones-months");
        for (let i = 0; i < nodeList.length; i++) {
          nodeList[i].style.display = "none";
        }

        //document.querySelectorAll(".milestones-months").style.display = "none";
    }
}

function getAge(dateString) {
    var today = new Date();
    //var today = new Date("2024/1/11 10:00:00");
    var birthDate = new Date(dateString);
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
    var hours = today.getHours() - birthDate.getHours();
    var minutes = today.getMinutes() - birthDate.getMinutes();
    var seconds = today.getSeconds() - birthDate.getSeconds();

    
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months = months + 12;
    }    
    
    if (days < 0 || (days === 0 && today.getHours() < birthDate.getHours())) {
        months--;
        days = days + daysInMonth(today.getMonth(),today.getFullYear()); 
    }

    if (hours < 0) {
        days--;
        hours = hours + 24;
    }

    if (minutes < 0) {
        hours--;
        minutes = minutes + 60;
    }

    if (seconds < 0) {
        minutes--;
        // minutes = minutes - 1;
        seconds = seconds + 60;
        // seconds += 60;
    }
    printResults(years,months,days,hours, minutes, seconds);
    changeLabels(years,months,days,hours, minutes, seconds);
    showMilestones(years,months);

}

var intervalId = window.setInterval(showCorrectAge, 1000);

window.onload = getAge("2022/10/27 13:01:00");
// console.log('years: ' + getAge("2022/10/27"));


