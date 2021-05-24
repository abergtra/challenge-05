//connect to HTMl with Ids
var nineAM = $('#9time');
var tenAM = $('#10time');
var elevenAM = $('#11time');
var twelvePM = $('#12time');
var onePM = $('#13time');
var twoPM = $('#14time');
var threePM = $('#15time');
var fourPM = $('#16time');
var fivePM = $('#17time');
var sixPM = $('#18time');
var sevenPM = $('#19time');
var eightPM = $('#20time');

//establish current date & time with Moment.js
var currentDateTime = moment().format('dddd') + ' | ' + moment().format("MMM Do") + ', ' + moment().format("YYYY");
var currentHour = moment().format('h:mm:ss a');
var hour = moment().hours(); //note this outputs 24 hour time, not AM/PM

//print date and time to heading
var interval = setInterval(function() {
    var rightNow = moment();
    $('#currentDay').html(rightNow.format('dddd') + ' | ' + rightNow.format("MMM Do") + ', ' + rightNow.format("YYYY") + ' | ' + rightNow.format('hh:mm:ss A'));
}, 100);

//Universal Variables
var UItext;
var timeSpan;

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
        //Identify time each textbox refers to
        var textTime = parseInt($(this).attr("id"));
        //Identify real life time
        hour = parseInt(hour);

        //Console Logs used for testing/debugging
            //console.log(textTime);
            //console.log(hour);

        //Compare textbox time and real life time for formatting
        if (hour == textTime) {
            $(this).addClass("present");
        } else if (hour < textTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    });
}

//Save Button 
$(".saveBtn").on("click", function(){

    timeSpan = $(this).siblings(".hour").text().trim();
    UItext = $(this).siblings(".user-input").val().trim();

    //Console Logs used for testing/debugging
    console.log(timeSpan);
    console.log(UItext);

    localStorage.setItem(timeSpan, JSON.stringify(UItext));
});

startUp();
timedColor();