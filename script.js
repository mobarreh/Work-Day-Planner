var today = dayjs();
$('#currentDay').text(today.format('dddd, MM, YYYY'));
//Set variable for the textarea element
var nine_am = document.getElementById("9am")
var ten_am = document.getElementById("10am")
var eleven_am = document.getElementById("11am")
var twelve_pm = document.getElementById("12pm")
var one_pm = document.getElementById("1pm")
var two_pm = document.getElementById("2pm")
var three_pm = document.getElementById("3pm")
var four_pm = document.getElementById("4pm")
var five_pm = document.getElementById("5pm")
//Set variable for the button class
var saveButton = $(".saveBtn")
//Funtion that dynamically sets the value of the textarea to the ID of the parent element in the local storage
function saveFunction(){
  var textValue = $(this).siblings(".description").val()
  var time = $(this).parent().attr("id")
  localStorage.setItem(time, textValue)
  console.log(time)
  console.log(textValue)
}
//Executes the save function when button is clicked
saveButton.on("click", saveFunction)
//Function that assigns the variables assigned to the textarea with the value stored in local storage
function restore(){
  nine_am.value = localStorage.getItem("hour-9")
  ten_am.value = localStorage.getItem("hour-10")
  eleven_am.value = localStorage.getItem("hour-11")
  twelve_pm.value = localStorage.getItem("hour-12")
  one_pm.value = localStorage.getItem("hour-13")
  two_pm.value = localStorage.getItem("hour-14")
  three_pm.value = localStorage.getItem("hour-15")
  four_pm.value = localStorage.getItem("hour-16")
  five_pm.value = localStorage.getItem("hour-17")
}
restore()
