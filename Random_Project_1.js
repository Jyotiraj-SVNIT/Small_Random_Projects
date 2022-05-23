// console.log("Hello World");
alert("Welcome to the PROMPT ODOMETER");
var distance = prompt("Enter the distance you have travelled: ");
if(distance==null){
    alert("No distance is enterd, calculation dismissed");
    location.reload();
}else{
    var minutes= (distance/40)*60;
    alert("The amount of time elapsed in minutes: "+minutes+" minutes");
}
document.write("Code Ended!");