$(document).ready(function(){
let day = document.getElementById("currentDay");

var today = moment().format("dddd, MMMM Do YYYY")
$(day).text(today);


$(".btn").click(function(event){
    console.log("functioning");
    event.preventDefault();

    let taskText = $(this).siblings(".form-control").val();

    if(taskText === ""){
        return;
    }

    localStorage.setItem("time", taskText);
})

$('#9am .form-control').val(localStorage.getItem("09"));
$('#11am .form-control').val(localStorage.getItem("11"))

});