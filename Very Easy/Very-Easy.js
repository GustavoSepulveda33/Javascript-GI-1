

// function enter() {
// var x = prompt("Enter a value for X"); 
// var y = prompt("Enter a value for Y"); 

// }

// let answer = (x - y)

// console.log("The difference between 10 and 5 is " + answer); 


function calc(){

    var x = prompt("Enter a value for X"); 
    var y = prompt("Enter a value for Y"); 
        
    let answer = (x - y)

    console.log("The difference between" + x + " and " + y + " is " + answer + "."); 
    document.getElementById("answer").innerHTML = "The difference between " + x + " and " + y + " is " + answer + "."

}




