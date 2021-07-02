//This displays the current day in the header of the html
var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);

//This declares what the current time is for the present class
var currentTime = moment()

//These variables state the beginning and end times for each hour
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


//The following conditionals add the present time class to the html timeblock
if ((moment().isBetween(beginningTime9, endTime9)))
{
    document.getElementById("nine").classList.add("present");
}

if ((moment().isBetween(beginningTime10, endTime10)))
{
    document.getElementById("ten").classList.add("present");
}

if ((moment().isBetween(beginningTime11, endTime11)))
{
    document.getElementById("eleven").classList.add("present");
}

if ((moment().isBetween(beginningTime12, endTime12)))
{
    document.getElementById("twelve").classList.add("present");
}

if ((moment().isBetween(beginningTime1, endTime1)))
{
    document.getElementById("one").classList.add("present");
}

if ((moment().isBetween(beginningTime2, endTime2)))
{
    document.getElementById("two").classList.add("present");
}

if ((moment().isBetween(beginningTime3, endTime3)))
{
    document.getElementById("three").classList.add("present");
}

if ((moment().isBetween(beginningTime4, endTime4)))
{
    document.getElementById("four").classList.add("present");
}

if ((moment().isBetween(beginningTime5, endTime5)))
{
    document.getElementById("five").classList.add("present");
}

//The following conditionals add the past class to each timeblock html element
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

//functions to save text input to local storage
function save9(){
    var dataToSave = document.getElementById("myInput9").value;
    localStorage.setItem("data9", dataToSave);
}

$("#myInput9").val(localStorage.getItem("data9"));

function save10(){
    var dataToSave = document.getElementById("myInput10").value;
    localStorage.setItem("data10", dataToSave);
}

$("#myInput10").val(localStorage.getItem("data10"));

function save11(){
    var dataToSave = document.getElementById("myInput11").value;
    localStorage.setItem("data11", dataToSave);
}

$("#myInput11").val(localStorage.getItem("data11"));

function save12(){
    var dataToSave = document.getElementById("myInput12").value;
    localStorage.setItem("data12", dataToSave);
}

$("#myInput12").val(localStorage.getItem("data12"));

function save1(){
    var dataToSave = document.getElementById("myInput1").value;
    localStorage.setItem("data1", dataToSave);
}

$("#myInput1").val(localStorage.getItem("data1"));

function save2(){
    var dataToSave = document.getElementById("myInput2").value;
    localStorage.setItem("data2", dataToSave);
}

$("#myInput2").val(localStorage.getItem("data2"));

function save3(){
    var dataToSave = document.getElementById("myInput3").value;
    localStorage.setItem("data3", dataToSave);
}

$("#myInput3").val(localStorage.getItem("data3"));

function save4(){
    var dataToSave = document.getElementById("myInput4").value;
    localStorage.setItem("data4", dataToSave);
}

$("#myInput4").val(localStorage.getItem("data4"));

function save5(){
    var dataToSave = document.getElementById("myInput5").value;
    localStorage.setItem("data5", dataToSave);
}

$("#myInput5").val(localStorage.getItem("data5"));
