//This is the code to check the grades of a student looking at the marks of the students
alert("Pass/Fail cum grade Calculator!");
var score=prompt("Enter the marks you got in the Exam: ");
if(score>=88){
    alert("You got an excellent \'A\' grade");
}else if(score>=44 && score<=87){
    alert("You got a good \'B\' grade");
}else{
    alert("You got a \'F\' ");
}
document.write("Code Ended");