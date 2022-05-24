// Discounted Price Calculator

alert("Discounted Price Calculator");
var prodID= prompt("Enter the Product Id: ");
var price=prompt("Enter the price of the product: ");
var discount=prompt("Enter the discount rate of the product: ");

var prod1= new Product(prodID, price);
alert(prod1.prodID+"price before: "+prod1.price);

prod1.changePrice(discount);
alert(prod1.prodID + " New discounted price: " + prod1.price);

function Product(prodID, price){
    this.prodID=prodID;
    this.price=price;

    this.changePrice= function(discount){
        this.price= price-(price*discount*0.01);
    }
}