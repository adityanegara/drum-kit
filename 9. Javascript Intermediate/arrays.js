var guestList = ["adit", 1, "tida", 2, true];
alert(guestList);
var name = prompt("what is your name : ");
if(guestList.includes(name)){
    alert("Welcome "+name);
}
else{
    alert("Who the fuck are u?");
}