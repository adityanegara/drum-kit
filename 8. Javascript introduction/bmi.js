var weight = prompt("insert your weight : ");
var height = prompt("inser your height : ");
alert(calculateBMI(weight, height));


function calculateBMI(weight, height){
    var bmi = weight / (height * height);
    return bmi;
}