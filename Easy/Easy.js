


// Enter Name Button Function

function start() {
    
    var name1 = prompt("First Name..."); 
    var name2 = prompt("Second Name..."); 


    let L1 = name1.length; 
    let L2 = name2.length;

    // let difference = (L1 - L2);


    if (L1 > L2) {
        difference = (L1 - L2);

        console.log("The name " + name1 + " is longer than " + name2 + " by " + difference + " characters.");
        document.getElementById("statement").innerHTML = "The name " + name1 + " is longer than " + name2 + " by " + difference + " characters.";
    } else if (L2 > L1) {
        difference = (L2 - L1); 

        console.log("The name " + name2 + " is longer than " + name1 + " by " + difference + " characters.");
        document.getElementById("statement").innerHTML = "The name " + name2 + " is longer than " + name1 + " by " + difference + " characters.";

    } else {

        console.log("The names " + name1 + " and " + name2 + " are the same lenght.");
        document.getElementById("statement").innerHTML = "The names " + name1 + " and " + name2 + " are the same lenght."; 

    }

}






// Names for comparison: 
// var name1 = prompt("First Name..."); 
// var name2 = prompt("Second Name..."); 


// .lenght reads the amount of characters in a string
// let L1 = name1.length; 
// let L2 = name2.length;

// let difference = (L1 - L2);

// console.log(L1 - L2);
// console.log(difference);

// console.log("The name " + name1 + " is longer than " + name2 + " by " + difference + " characters")

// document.getElementById("statement").innerHTML = "The name " + name1 + " is longer than " + name2 + " by " + difference + " characters"





