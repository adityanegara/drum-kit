var name = prompt("Insert Your Name");
var firstCharacter = name.slice(0, 1).toUpperCase();
var restCharacter = name.slice(1, name.length).toLowerCase();
var newName = firstCharacter + restCharacter;
alert(newName);
