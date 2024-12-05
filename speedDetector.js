const readline = require('readline'); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

// Function to detect speed and return appropriate response
function speedDetector(speed) {
    const speedLimit = 70;   // Speed limit constant
    const kmPerPoint = 5;    // Kilometers per demerit point

    
    if (speed <= speedLimit) {
        return "Ok";  // If speed is within the limit
    } else {
        // Calculate demerit points if speed is over the limit
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        // Check if points exceed 12, which results in license suspension
        if (points > 12) {
            return "License suspended";  // License suspended if more than 12 points
        } else {
            return "Points: " + points;  // Return the number of demerit points
        }
    }
}

// Prompt user to enter the car speed
rl.question('Enter car speed: ', (speed) => {
    // Call speedDetector with user input and parse it to integer
    let result = speedDetector(parseInt(speed));
    // Display the result
    console.log(result);
    // then close the readline interface
    rl.close();
});
