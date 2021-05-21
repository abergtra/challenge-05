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

//