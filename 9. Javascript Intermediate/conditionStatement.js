var firstName = prompt("Please enter your name");
var secondName = prompt("Insert Second Name : ");
var randomNumber = Math.random(); 
var lovePercentage = 41;
if(lovePercentage == 100){
    alert(firstName  + " Love Percentage With "+ secondName +" = "+lovePercentage + "%" +"OH MY GOD YOU SHOULD GET MARRIED!");
}
else  if(lovePercentage < 10){
    alert(firstName  + " Love Percentage With "+ secondName +" = "+lovePercentage + "%" + "IT WONT WORK OUT!");
}
else if(lovePercentage > 30 && lovePercentage <=70){
    alert(firstName  + " Love Percentage With "+ secondName +" = "+lovePercentage + "%" + "you had a chance");
}
else{
    alert(firstName  + " Love Percentage With "+ secondName +" = "+lovePercentage + "%");
}
