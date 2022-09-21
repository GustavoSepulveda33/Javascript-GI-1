





function words() {
    var word1 = prompt("What did you want to say?..."); 

    if (word1.toUpperCase() === word1) {
        console.log("Stop screaming at me! Ask again more respectfully. (Your question was written in all caps)");
        document.getElementById("fortune").innerHTML = "Stop screaming at me! Ask again more respectfully. (Your question was written in all caps)"

    } else if (word1.toLowerCase() === word1) {
        console.log("WHAT?! Speak up, son, I can barely hear you. (Your question is written in lowercase)"); 
        document.getElementById("fortune").innerHTML = "WHAT?! Speak up, son, I can barely hear you. (Your question is written in lowercase)"

    } else {
        console.log("Hmmm my psychic powers are being interferred with! I cannot answer right now. (Your question is written normally)");
        document.getElementById("fortune").innerHTML = "Hmmm my psychic powers are being interferred with! I cannot answer right now. (Your question is written normally)"
    }

}

