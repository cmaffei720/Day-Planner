$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"))

var hour = moment().hours()
console.log (hour)

//for statement to go through each Hour ID as assigned in index.html
for (i = 9; i<18; i++) {
    //if statement - sees if current hour is past hour on planner, equal to, or before, and assigns appropriate class
    if (i < hour) {
    $("#"+i).addClass("past")
    }
    else if (i === hour) {
        $("#"+i).addClass("present")
       // $("#"+i).text("Current hour")
    }
    else if (i > hour) {
        $("#"+i).addClass("future")
    }
}


$(".saveBtn").on("click", function(){
    for (m=9; m<18; m++) {
    localStorage.setItem("newtask"+m, $("#"+m).text())
     }
    })


for (a = 9; a < 18; a++) {
    $("#"+a).text(localStorage.getItem("newtask"+a))
}
