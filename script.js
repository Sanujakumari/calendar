//create the input element(date)
//create a div element..
var pdiv=document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');
//create a date input field
var dateelem=document.createElement('input');
dateelem.setAttribute('type','date');
dateelem.setAttribute('id','dob');
dateelem.setAttribute('name','dob');
pdiv.appendChild(dateelem)
//create a button element
var button=document.createElement('button');
button.innerHTML='display data';
button.setAttribute('class','btn btn-primary')
button.addEventListener('click',calculate);
pdiv.appendChild(button);

//display the data in the html
var dd=document.createElement('div');
dd.setAttribute('id','display');

function calculate(){
var input=document.getElementById('dob').value;
console.log(input);
//checking whether my input is a valid date or not

if(Date.parse(input)){
    var inputdate=new Date(input);
    console.log(inputdate);
    //todays date
    var currentdate=new Date();
    console.log(currentdate);

var milliseconsdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime())
console.log(milliseconsdiff);
var secondsdiff=mathfloor(milliseconsdiff,1000);
console.log(secondsdiff);

var minutediff=mathfloor(secondsdiff,60);
console.log(minutediff)

var hourdiff=mathfloor(minutediff,60);
console.log(hourdiff)

var daydiff=mathfloor(hourdiff,24)
console.log(daydiff)

var yeardiff=getyear(inputdate,currentdate);
console.log(yeardiff)

var monthdiff=getmonth(inputdate,currentdate);
console.log(monthdiff)

dd.innerHTML=`given input date is:${inputdate}<br
year :${yeardiff}<br>
month:${monthdiff}<br>
day:${daydiff}<br>
hours:${hourdiff}<br>
minutes:${minutediff}<br>
second:${secondsdiff}<br>
milliseconds:${milliseconsdiff}`;

}
else{
    dd.innerHTML="invalid date"
}
document.body.appendChild(dd)
}



function mathfloor(value1,value2){
    return Math.floor(value1/value2)
}


function getyear(value1,value2){
var date1=new Date(value1);
var date2=new Date(value2);
return date2.getFullYear()-date1.getFullYear();
}


function getmonth(value1,value2){
var year=getyear(value1,value2);
var month=(year*12)+(value2.getMonth()-value1.getMonth())
return month;
}
document.body.append(pdiv)
