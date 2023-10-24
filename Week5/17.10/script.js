/*const food = {
    calories:250,
    vitamins: ["B12","C","A"],
    name: "Banana",
    contains:["nuts","gluten"],
    vegetarian:true,
    halal:true,
    expirary_date: "2023-10-10",
    category:"fruit",
    price: 5.90,
    edible:function(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}

console.table(food);

console.log(food.name);
console.log(food["expirary_date"]);

console.log('Is my ${food.name) still edible?');
console.log(food.edible()); 
//object constructor
function Food2(calories,vitamins, name, contains, vegetarian =true, halal, expirary_date, category, price) {
    this.calories= calories;
    this.vitamins = vitamins;
    this.name = name;
    this.contains= contains;
    this.vegetarian = vegetarian;
    this.halal = halal;
    this.expirary_date =  expirary_date;
    this.category = category;
    this.price = price;
    this.edible = function(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}
const banana = new Food2(600, ["B12","C","A"],"Banana", ["nuts","gluten"],true, true, "2023-10-10", "fruit", 5.90  );
//console.table(banana);
banana.mushy = true;
banana.expirary_date = "2023-10-23";
console.log(banana.edible());
console.table(banana)

class Food {
    constructor(calories,vitamins, name, contains, vegetarian =true, halal, expirary_date, category, price) {
        this.calories= calories;
        this.vitamins = vitamins;
        this.name = name;
        this.contains= contains;
        this.vegetarian = vegetarian;
        this.halal = halal;
        this.expirary_date =  expirary_date;
        this.category = category;
        this.price = price;
    }
    edible(){
        let today = new Date();
        if(today.toISOString().split('T')[0]<this.expirary_date){
            return true;
        }
        return false;
    }
}

let apple = new Food( 700, ["B12","C","A"],"Apple", ["nuts","gluten"],true, true, "2023-10-10", "fruit", 5.90);

console.table(apple); */


//EXERCISE 1
//Which number is bigger?
//Declare 2 variables, both numbers
//Compare which number is greater
//Log the output, e.g. "The greater number of 5 and 10 is 10."
//Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5."

/*let number1 = 6 ;
let number2 = 8 ;
if(number1>number2){
    console.log(`The greater number of 6 and 8 is ${number1}. `);
}console.log(`The greater number of 6 and 8 is ${number2}. `);


//EXERCISE 2
/*The world translator
Write a function named helloWorld that:
Takes 1 argument, a language code (e.g. "es", "de", "en")
Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works*/

/*
function helloWorld (){
    let languageCode = prompt("Please enter a language code es/de/en ");
    switch(languageCode){

    case ("es"):
        console.log("Hola, Mundo");
    break;

    case ("de"):
        console.log("Hallo, Welt");
    break;

    default:ß
    console.log("Hello, World");

    }

}
helloWorld();


//EXERCISE 3 
/*
Retirement calculator
Create a program that determines how many years you have left until retirement and the year you can retire. It should prompt for your current age and the age you want to retire and display the output as shown in the example that follows on the next slide.
*/
/*
let age = prompt("Please enter your age");
let retirementAge = prompt("Please enter the age you want to retire");
function calculateRetirementAge (age,retirementAge){
    return leftYears = retirementAge - age ;
}
if(isNaN(age) || isNaN(retirementAge) || retirementAge <0 || retirementAge<age ){
    console.log("please enter a valid age");

}else {console.log(`You have ${calculateRetirementAge (age,retirementAge)} years left before you can get retired`);  
  prediction();}

function prediction (){
let now = new Date().getFullYear();
let retirementYear = calculateRetirementAge (age,retirementAge) + now ;
console.log(`You will be retired in ${retirementYear}`);

}
TIP CALCULATOR
Test plan for our tip calculator
Inputs:
bill amount: 10
tip rate: 15
Expected result:
tip: CHF 1.50
total: CHF 11.50


*/
let billAmonunt = prompt("Please enter your Bill Amount");

let tipRate = prompt("Please enter the tip rate ")


if(isNaN(billAmonunt)||billAmonunt<=0 ||isNaN(tipRate)|| tipRate<1){
    console.log("Please enter  valid values") 
}
else {tipCalculator();
}

function tipCalculator (){
    let tipAmonunt = billAmonunt*tipRate/100;
    if(tipAmonunt%1<=0.5){
     tipAmonunt=Math.floor(tipAmonunt);   
    } else { tipAmonunt=Math.ceil(tipAmonunt);}
    console.log(`Your tip is ${tipAmonunt} CHF`);
}












