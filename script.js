var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);

var beginningTime9 = moment('09:00', 'h:mma');
var endTime9 = moment('09:59', 'h:mma');

var beginningTime10 = moment('10:00', 'h:mma');
var endTime10 = moment('10:59', 'h:mma');

var beginningTime11 = moment('11:00', 'h:mma');
var endTime11 = moment('11:59', 'h:mma');

var beginningTime12 = moment('12:00', 'h:mma');
var endTime12 = moment('12:59', 'h:mma');

var beginningTime1 = moment('13:00', 'h:mma');
var endTime1 = moment('13:59', 'h:mma');

var beginningTime2 = moment('14:00', 'h:mma');
var endTime2 = moment('14:59', 'h:mma');

var beginningTime3 = moment('15:00', 'h:mma');
var endTime3 = moment('15:59', 'h:mma');

var beginningTime4 = moment('16:00', 'h:mma');
var endTime4 = moment('16:59', 'h:mma');

var beginningTime5 = moment('17:00', 'h:mma');
var endTime5 = moment('17:59', 'h:mma');


if ((moment().isAfter(endTime9)))
{
    document.getElementById("nine").classList.add("past");
}

if ((moment().isAfter(endTime10)))
{
    document.getElementById("ten").classList.add("past");
}

if ((moment().isAfter(endTime11)))
{
    document.getElementById("eleven").classList.add("past");
}

if ((moment().isAfter(endTime12)))
{
    document.getElementById("twelve").classList.add("past");
}

if ((moment().isAfter(endTime1)))
{
    document.getElementById("one").classList.add("past");
}

if ((moment().isAfter(endTime2)))
{
    document.getElementById("two").classList.add("past");
}

if ((moment().isAfter(endTime3)))
{
    document.getElementById("three").classList.add("past");
}

if ((moment().isAfter(endTime4)))
{
    document.getElementById("four").classList.add("past");
}

if ((moment().isAfter(endTime5)))
{
    document.getElementById("five").classList.add("past");
}