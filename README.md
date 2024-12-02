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

### Salary Calculator

The Salary Calculator script uses the `readline` module to take user input for basic salary and benefits. It calculates various statutory deductions like PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) to determine the net salary. Here are detailed explanations of each component:

#### 1. Reading User Input

The script uses the `readline` module to read user inputs for basic salary and benefits. This module helps to create an interface for reading data from a readable stream such as `process.stdin` and `process.stdout`.

#### 2. Calculating PAYE

PAYE is a progressive tax applied to the gross salary based on predefined brackets:
- First Bracket (Up to 24,000 Ksh): Taxed at 10%.
- Second Bracket (24,001 - 32,333 Ksh): First 24,000 Ksh taxed at 10%, the remainder at 25%.
- Third Bracket (32,334 - 500,000 Ksh): First 24,000 Ksh taxed at 10%, next 8,333 Ksh at 25%, remainder at 30%.
- Fourth Bracket (500,001 - 800,000 Ksh): First 24,000 Ksh taxed at 10%, next 8,333 Ksh at 25%, next 467,667 Ksh at 30%, remainder at 32.5%.
- Fifth Bracket (Above 800,000 Ksh): First 24,000 Ksh taxed at 10%, next 8,333 Ksh at 25%, next 467,667 Ksh at 30%, next 300,000 Ksh at 32.5%, and remainder at 35%.

#### 3. Calculating NSSF

NSSF contributions are based on this tier:
- Tier I: Contributions up to 7,000 Ksh are taxed at 6%.


#### 4. Calculating NHIF

NHIF deductions are based on the gross salary with predefined rates for different salary ranges. For instance:
- Salaries up to 5,999 Ksh are taxed at 150 Ksh.
- Salaries between 6,000 - 7,999 Ksh are taxed at 300 Ksh.
- The rates continue to increase with salary, capping at a deduction of 1,700 Ksh for salaries above 100,000 Ksh.

#### 5. Calculating Net Salary

The script calculates the net salary by summing the basic salary and benefits to get the gross salary, then deducting PAYE, NSSF, and NHIF from the gross salary. The steps are as follows:
1. Calculate Gross Salary: Sum of basic salary and benefits.
2. Calculate NSSF Deduction: Based on gross salary.
3. Calculate Taxable Pay: Gross salary minus NSSF.
4. Calculate PAYE Deduction: Based on taxable pay.
5. Calculate NHIF Deduction: Based on gross salary.
6. Calculate Net Salary: Gross salary minus PAYE, NHIF, and NSSF.

#### 6. Output

The script outputs:
- Gross Salary: The sum of basic salary and benefits.
- NSSF Deduction: The calculated NSSF contribution.
- Taxable Pay: The salary amount subject to PAYE after NSSF deduction.
- PAYE Deduction: The calculated PAYE tax.
- NHIF Deduction: The calculated NHIF contribution.
- Net Salary: The remaining salary after all deductions.

These calculations ensure that the script correctly reflects the statutory deductions applied to a typical salary structure in Kenya. This provides a comprehensive view of an employee's take-home pay after all mandatory contributions are accounted for.