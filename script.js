// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//Current date 
var today = dayjs();
$('#currentDay').text(today.format('dddd, MM, YYYY'));

var nine_am = document.getElementById("hour-9")
var ten_am = document.getElementById("hour-10")
var eleven_am = document.getElementById("hour-11")
var twelve_pm = document.getElementById("hour-12")
var one_pm = document.getElementById("hour-13")
var two_pm = document.getElementById("hour-14")
var three_pm = document.getElementById("hour-15")
var four_pm = document.getElementById("hour-16")
var five_pm = document.getElementById("hour-17")

var saveButton = document.getElementById("saveBtn")


function init(){
  var init9 = JSON.parse(localStorage.getItem("nine_am"))
  if(intit9 !== null){
    init9 = nine_am.textContent
  }
}

function storeTasks(){
  localStorage.setItem("nine_am", JSON.stringify(nine_am));
}
















  saveButton.addEventListener("click", function(event) {})
  save()
  render()


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

init()
