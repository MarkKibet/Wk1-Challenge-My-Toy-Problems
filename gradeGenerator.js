// Import the readline module to handle user input
import { createInterface } from 'readline';

// Creating an interface for reading input and output
const rl = createInterface({
    input: process.stdin,  // Standard input (keyboard)
    output: process.stdout // Standard output (console)
});

// Function to generate a grade based on marks
function gradeGenerator(marks) {
    if (marks > 79) { // Marks greater than 79 get an 'A'
        return 'A';
    } else if (marks >= 60) { // Marks between 60 and 79 get a 'B'
        return 'B';
    } else if (marks >= 49) { // Marks between 49 and 59 get a 'C'
        return 'C';
    } else if (marks >= 40) { // Marks between 40 and 48 get a 'D'
        return 'D';
    } else { // Marks below 40 get an 'E'
        return 'E';
    }
}

// Ask the user to enter student marks
rl.question('Enter student marks (0-100): ', (input) => {
    // Parsing the input to an integer
    let marks = parseInt(input);

    // Validate if the input is a number and within the valid range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Please enter a valid mark between 0 and 100.');
    } else {
        // Generate the grade using the gradeGenerator function
        let grade = gradeGenerator(marks);
        console.log("The grade is: " + grade);
    }

    // Closing the readline interface
    rl.close();
});
