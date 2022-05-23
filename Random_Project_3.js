alert("Snail in the Well Problem!");
var depth= prompt("Enter the depth of the well: ");
var day=0;
for(var i=0;i<depth;){
    day++;
    i=i+7;
    if(i>=depth){
        break;
    }
    i=i-2;

}
alert("The required amount of days to come out of the Well: "+day);
document.write("Code Ended Successfully!");