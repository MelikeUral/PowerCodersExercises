/*let birthYear=Number(prompt("Enter your year of your birthday: "));
console.log(birthYear)
//constraints: FutureYear has to be later than or equal to the birthYear
//both input values are integers, length is at least, positive numbers, not below 1900
//We focus on positive integers
if(isNan(birthYear) || birthYear === 0){
  alert("This is not a number. Please try again");
  birthYear=+(prompt("Enter your year of your birthday: "));
}
else{
    let futureYear= +prompt("Enter your desired year:");
if(isNan(futureYear) || futureYear === 0 ){
    alert("This is not a number. Please try again");
    futureYear=+(prompt("Enter your desired year: "));
  }
}
console.log(birthYear);
console.log(futureYear);*/


/*Powercoders Exercise
let number = 1;

while(number<=100){

    if(number%5 ==0 && number%7 ==0 ){
        console.log("PowerCoders")
        break;
    }else if(number%5 ==0){
        console.log("Power")
    }else if (number%7 ==0){
        console.log("Coders")
    }else{
        console.log(number)
    }
    number++;
}
console.log("end of loop");*/


/*let birthYear =0;
do{

    birthYear=prompt("Year of birth ??")

}while(isNan(birthYear) || birthYear === 0){
   let futureYear;
  }
  do{
      let futureYear= +prompt("Enter your desired year:");
  }while(isNan(futureYear) || futureYear === 0 )*/
    
  let direction= "left";
 switch(direction){
    case "left":
        console.log("I'll go left");
        break;
    case "right":
        console.log("I'll go right");
        break;
    default:
        console.log("I'll go straight ahead");
          
 }






