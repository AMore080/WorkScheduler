$(document).ready(function(){
let day = document.getElementById("currentDay");
let hour = moment().format("HH");
var today = moment().format("dddd, MMMM Do YYYY")
$(day).text(today);

console.log(hour);
// $(".currentDay").each(function(){
//     let currentDay = $(this).attr("class")
// })



$(".btn").click(function(event){
    console.log("functioning");
    event.preventDefault();

    let taskText = $(this).siblings(".form-control").val();
    let time = $(this).parent().attr("value");


    if(taskText === ""){
        return;
    }

    localStorage.setItem(time , taskText);
})

$('#9am .form-control').val(localStorage.getItem("9"));
$('#10am .form-control').val(localStorage.getItem("10"));
$('#11am .form-control').val(localStorage.getItem("11"));
$('#12am .form-control').val(localStorage.getItem("12"));
$('#1pm .form-control').val(localStorage.getItem("13"));
$('#2pm .form-control').val(localStorage.getItem("14"));
$('#3pm .form-control').val(localStorage.getItem("15"));
$('#4pm .form-control').val(localStorage.getItem("16"));
$('#5pm .form-control').val(localStorage.getItem("17"));

});