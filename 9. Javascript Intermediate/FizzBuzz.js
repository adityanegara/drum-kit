var output = [];

function FizzBuzz(){
    if(output.length == 0){
        output.push(1);
    }
    var number = output.length + 1;

    if(number % 3 == 0 && number % 5 == 0 ){
        alert("FizzBuzz");
        output.push("FizzBuzz");
    }
    
    else if(number % 3 == 0){
        alert("Fizz");
        output.push("Fizz");
    }
    
    else if(number % 5 == 0 ){
        alert("Buzz");
        output.push("Buzz");
    }
    
    else{
        alert(number);
        output.push(number);
    }
}


