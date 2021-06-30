var time = moment().format("MMM Do, YYYY");
$("#currentDay").text(time);

const nine = document.getElementById('nine')

var beginningTime9 = moment('9:00am', 'h:mma');
var endTime9 = moment('9:59am', 'h:mma');

console.log(moment().isBefore(endTime9));

if ((moment().isBefore(endTime9)))
{
    document.getElementById("nine").className = ".past"
}
