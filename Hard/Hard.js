
// Simple functions: 

// function add() {
//     console.log (x + y);
// }

// function subtract(){
//     console.log (x - y);
// }

// function mult() {
//     console.log(x * y); 
// }

// function divide() {
//     console.log(x / y); 
// }





function start(){

    var x = parseInt(prompt("Enter a value for X:")); 
    var y = parseInt(prompt("Enter a value for Y"));

    // parseInt () --> converts the user inputed string into integers, therefore numbers. Must do this in order to have the addition function work because if I just input the numbers from the prompt, it will read as string and the "+" in the console log does not add them but joins the strings toguether. For example, if x=2 and y=3, instead of adding the numbers and returning 5, it will return 23. 

// function add() {
    let answer = (x + y); 
    console.log(answer);
    document.getElementById("answers").innerHTML = "Addition: " + answer; 
// }

// function subtract() { 
    let answer1 = (x - y);
    console.log (answer1);
    document.getElementById("answers1").innerHTML = "Subtraction: " + answer1; 
    // }
// }

// function multiply() {
    let answer2 = (x * y);
    console.log(answer2);
    document.getElementById("answers2").innerHTML = "Multiplication: " + answer2; 
    // }
// }

// function divide() {
    let answer3 = (x / y); 
    console.log(answer3); 
    document.getElementById("answers3").innerHTML = "Division: " + answer3; 
    // }
// }
}