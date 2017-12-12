/*alert("I love ducks");
alert(5+8);
alert(5.234234*83.123123/4.2123);*/
var date = new Date();
// alert("Today is:"+date);
console.log("Today is:"+date);
document.body.innerHTML="<h1>Today's date is:"+date+"</h1>";
document.body.innerHTML="<h1>Today's date is:"+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+"</h1>";
console.log("Today's date is:"+(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear());
