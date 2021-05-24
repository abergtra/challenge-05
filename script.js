//connect to HTMl with Ids
var nineAM = $('#9amtext');
var tenAM = $('#10amtext');
var elevenAM = $('#11amtext');
var twelvePM = $('#12pmtext');
var onePM = $('#1pmtext');
var twoPM = $('#2pmtext');
var threePM = $('#3pmtext');
var fourPM = $('#4pmtext');
var fivePM = $('#5pmtext');
var sixPM = $('#6pmtext');
var sevenPM = $('#7pmtext');
var eightPM = $('#8pmtext');

//establish current date & time with Moment.js
var currentDate = moment().format('dddd') + ' | ' + moment().format("MMM Do") + ', ' + moment().format("YYYY");
var currentHour = moment().format('h:mm:ss a');
var hour = moment().hours();

//print date and time to heading
var interval = setInterval(function() {
    var rightNow = moment();
    $('#currentDay').html(rightNow.format('dddd') + ' | ' + rightNow.format("MMM Do") + ', ' + rightNow.format("YYYY") + ' | ' + rightNow.format('hh:mm:ss A'));
  }, 100);

var userInput;
var hourSpan;

//Page Start Up function
function startUp() {
    console.log("Log In Time: " + hour);

    var start9AM = JSON.parse(localStorage.getItem("9AM"));
    nineAM.val(start9AM);
  
    var start10AM = JSON.parse(localStorage.getItem("10AM"))
    tenAM.val(start10AM);
    
    var start11AM = JSON.parse(localStorage.getItem("11AM"))
    elevenAM.val(start11AM);
    
    var start12PM = JSON.parse(localStorage.getItem("12PM"))
    twelvePM.val(start12PM);
    
    var start1PM = JSON.parse(localStorage.getItem("1PM"))
    onePM.val(start1PM);
    
    var start2PM = JSON.parse(localStorage.getItem("2PM"))
    twoPM.val(start2PM);
    
    var start3PM = JSON.parse(localStorage.getItem("3PM"))
    threePM.val(start3PM);
   
    var start4PM = JSON.parse(localStorage.getItem("4PM"))
    fourPM.val(start4PM);
    
    var start5PM = JSON.parse(localStorage.getItem("5PM"))
    fivePM.val(start5PM);

    var start6PM = JSON.parse(localStorage.getItem("6PM"))
    sixPM.val(start6PM);
    
    var start7PM = JSON.parse(localStorage.getItem("7PM"))
    sevenPM.val(start7PM);

    var start8PM = JSON.parse(localStorage.getItem("8PM"))
    eightPM.val(start8PM);
  } 

  //Set Format of Textbox Based on Time
  function timedColor () {
    $(".textbox-format").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

  startUp();
  timedColor();