var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);

const nine = document.getElementById('nine')

var beginningTime9 = moment('9:00am', 'h:mma');
var endTime9 = moment('9:59am', 'h:mma');

var beginningTime10 = moment('10:00am', 'h:mma');
var endTime10 = moment('10:59am', 'h:mma');

var beginningTime11 = moment('11:00am', 'h:mma');
var endTime11 = moment('11:59am', 'h:mma');

var beginningTime12 = moment('12:00pm', 'h:mma');
var endTime12 = moment('12:59pm', 'h:mma');

var beginningTime1 = moment('1:00pm', 'h:mma');
var endTime1 = moment('1:59pm', 'h:mma');

var beginningTime2 = moment('2:00pm', 'h:mma');
var endTime12 = moment('2:59pm', 'h:mma');

var beginningTime3 = moment('3:00pm', 'h:mma');
var endTime3 = moment('3:59pm', 'h:mma');

var beginningTime4 = moment('4:00pm', 'h:mma');
var endTime4 = moment('4:59pm', 'h:mma');

var beginningTime5 = moment('5:00pm', 'h:mma');
var endTime5 = moment('5:59pm', 'h:mma');

console.log(moment().isBefore(endTime10));

if ((moment().isBefore(endTime10)))
{
    document.getElementById("ten").className = "past"
}
