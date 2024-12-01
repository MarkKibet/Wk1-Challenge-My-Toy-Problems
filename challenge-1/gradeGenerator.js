import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeGenerator(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

rl.question('Enter student marks (0-100): ', (input) => {
    let marks = parseInt(input);
    let grade = gradeGenerator(marks);
    console.log("The grade is: " + grade);
    rl.close();
});

