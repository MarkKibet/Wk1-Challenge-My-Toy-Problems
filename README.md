# Wk1-Challenge-My-Toy-Problems

# Code Challenges Repository

## Introduction

The work contains solutions to three challenges: a grade generator, a speed detector, and a salary calculator. Each program demonstrates practical applications of JavaScript to solve real-world problems. Below, you'll find detailed instructions on how to run each script, along with explanations of their functionality and the specific code used.

## Challenges

### Grade Generator
The Grade Generator script converts student marks into grades based on predefined criteria.

### Speed Detector
The Speed Detector script evaluates a car's speed and assigns demerit points if necessary.

### Salary Calculator (Kenya)
The Salary Calculator script computes the net salary for a Kenyan employee after various deductions.

## Running the Code

### Grade Generator
To run the Grade Generator script:
```sh
node gradeGenerator.js
```
Input: Enter the student's marks (0-100).  
Output: The corresponding grade.

### Speed Detector
To run the Speed Detector script:
```sh
node speedDetector.js
```
Input: Enter the car's speed.  
Output: Either "Ok" or the number of demerit points, or "License suspended".

### Salary Calculator (Kenya)
To run the Salary Calculator script:
```sh
node salaryCalculator.js
```
Input: Enter the basic salary and benefits.  
Output: Displays the gross salary, various deductions (PAYE, SHIF, NSSF, Housing Levy), and the net salary.

## Code Explanations

### Grade Generator Explanation
The Grade Generator script uses the `readline` module to handle user input from the command line. The `createInterface` method is used to set up the input and output streams.

- `readline` Module: This module provides an interface for reading data from a readable stream (like the process `stdin`).
- `createInterface`: This method sets up the interface to read input and write output. It is essential for taking user input in a Node.js command-line application.

The `gradeGenerator` function determines the grade based on the given marks:
```javascript
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
```
The script prompts the user to enter student marks and then calls the `gradeGenerator` function to determine and display the grade.

### Speed Detector Explanation
The Speed Detector script also uses the `readline` module for user input.

The `speedDetector` function calculates demerit points based on the car's speed. It compares the speed against a predefined limit and calculates points if the speed exceeds the limit. If points exceed 12, the driver's license is suspended:
```javascript
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }
    }
}
```
The script prompts the user to enter the car's speed and then displays the result based on the calculated points.

### Salary Calculator (Kenya) Explanation
The Salary Calculator script uses the `readline` module to take user input for basic salary and benefits.

The script calculates various deductions like PAYE, SHIF, NSSF, and Housing Levy. Here's a breakdown of each function:

- `calculatePAYE`: Calculates the PAYE (income tax) based on progressive tax brackets.
- `calculateSHIF`: Calculates the SHIF deduction as a fixed percentage of the gross salary.
- `calculateNSSF`: Calculates the NSSF deduction based on tier limits and rates.
- `calculateHousingLevy`: Calculates the Housing Levy as a fixed percentage of the gross salary.

The `calculateNetSalary` function integrates all these deductions to compute the net salary:
```javascript
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(grossSalary);
    let shif = calculateSHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let housingLevy = calculateHousingLevy(grossSalary);

    let netSalary = grossSalary - paye - shif - nssf - housingLevy;
    return {
        grossSalary: grossSalary,
        paye: paye,
        shif: shif,
        nssf: nssf,
        housingLevy: housingLevy,
        netSalary: netSalary
    };
}
```
The script prompts the user to enter the basic salary and benefits, then calculates and displays the gross salary, deductions, and net salary.
