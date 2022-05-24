alert("Birth Year Calculator");

var name = prompt("Enter the name of the person: ");
var age = prompt("Enter the age of the person: ");

function person(name, age){
    this.name=name;
    this.age=age;
    this.yearOfBirth=bornYear;

}
function bornYear(){
    return 2022- this.age;
}

var p=new person(name, age);

console.log("Thus the year of Birth: "+p.yearOfBirth());
document.write("Thus the year of Birth of "+p.name+": "+p.yearOfBirth());