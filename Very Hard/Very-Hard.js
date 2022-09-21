// Simple functions: 

// function add() {
//     console.log(x + y);
// }

// function subtract(){
//     (x - y);
// }

// function mult() {
//     console.log(x * y); 
// }

// function divide() {
//     console.log(x / y); 
// }




function Calc() {
    // declaring variables
    let x = parseInt(prompt("Enter a value for X..."));
    let operator = prompt("Choose an operator: +  -  *  / ");
    let y = parseInt(prompt("Enter a value for Y..."));

    //Callback functions: 

    // addition
    function add() {
        console.log(x + " + " + y + " = " + (x + y));
        document.getElementById("answers").innerHTML = x + " + " + y + " = " + (x + y); 
    }
    //subtraction
    function subtract(){
        console.log(x + " - " + y + " = " + (x - y));
        document.getElementById("answers").innerHTML = x + " - " + y + " = " + (x - y) ; 
    }
    //multiplication
    function mult() {
        console.log(x + " * " + y + " = " + (x * y)); 
        document.getElementById("answers").innerHTML = x + " * " + y + " = " + (x * y); 
    }
    //division
    function divide() {
        console.log(x + " * " + y + " = " + (x * y)); 
        document.getElementById("answers").innerHTML = x + " / " + y + " = " + (x / y); 
    }


    //If/Else statements: 


    if (operator == "+") {
        // return add ; 
        add();
    
    } else if (operator == "-") {
        subtract(); 

    } else if (operator == "*") {
        mult(); 

    } else if (operator == "/") {
        divide();

    } else {
        document.getElementById("answers").innerHTML = "Incorrect value input. Try again."; 
    }





}
