let date = new Date();
let hours = date.getHours();
console.log(hours);
const hello=()=>{
    setTimeout(hello,500)
if (hours>0 && hours<12) {
    document.getElementById('hour').innerHTML="good morning";
    document.getElementById('hour').style.color="brown";   
} else if (hours>=12 && hours<17) {
    document.getElementById('hour').innerHTML="good afternon";
    document.getElementById('hour').style.color="red";       
} else if(hours>=17 && hours<21){
    document.getElementById('hour').innerHTML="good evening";
    document.getElementById('hour').style.color="blue";   
} else{
    document.getElementById('hour').innerHTML="good night";
    document.getElementById('hour').style.color="lightblue";   
}
    document.getElementById('hour1').innerHTML = Date();
}
