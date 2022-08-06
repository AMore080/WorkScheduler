let day = document.getElementById("currentDay");
let task = document.querySelector(".form-control")
let save = document.querySelector(".btn")

let taskArr = [];


var today = moment().format("dddd, MMMM Do YYYY")
$(day).text(today);

function storeTasks(){
    localStorage.setItem("task" , JSON.stringify(taskArr));
}

function init(){
    let taskStor = JSON.parse(localStorage.getItem("taskArr"));

    if(taskStor !== null){
        task = taskStor;
    }
}

save.addEventListener("click", function(event){
    console.log("functioning");
    event.preventDefault();

    var taskText = task.value

    if(taskText === ""){
        return;
    }

    taskArr.push(taskText);

    storeTasks();
})

init()