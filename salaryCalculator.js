import { createInterface } from 'readline';


const rl = createInterface({
    input: process.stdin,  
    output: process.stdout 
});

// Function to calculate PAYE (Pay As You Earn) tax based on gross salary
const calculatePAYE = (grossSalary) => {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10% tax for gross salary up to 24,000
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.10) + ((grossSalary - 24000) * 0.25); // 10% for first 24,000 and 25% for the amount above 24,000 up to 32,333
    } else if (grossSalary <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30); // Additional 30% for the amount above 32,333 up to 500,000
    } else if (grossSalary <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325); // then 32.5% for the amount above 500,000 up to 800,000
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35); // Another 35% for the amount above 800,000
    }
    return tax;
};

// Function to calculate NSSF (National Social Security Fund) based on gross salary
const calculateNSSF = (grossSalary) => {
    const tierILimit = 7000; // NSSF Tier I limit
    const tierIRate = 0.06;  // NSSF Tier I rate of 6%
    return grossSalary <= tierILimit ? grossSalary * tierIRate : (tierILimit * tierIRate) + ((grossSalary - tierILimit) * tierIRate);
    // Calculate NSSF contribution for salary up to tierI limit and for salary above tierI limit
};

// Function to calculate NHIF (National Hospital Insurance Fund) based on gross salary
const calculateNHIF = (grossSalary) => {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; // NHIF rates based on gross salary ranges
};

// Function to calculate net salary
const calculateNetSalary = (basicSalary, benefits) => {
    const grossSalary = basicSalary + benefits; // Sum of basic salary and benefits
    const nssf = calculateNSSF(grossSalary); // Calculate NSSF before taxable income
    const taxablePay = grossSalary - nssf; // Taxable income after NSSF deduction
    
    const paye = calculatePAYE(taxablePay); // Use taxable income for PAYE calculation
    const nhif = calculateNHIF(grossSalary); // NHIF calculation based on gross salary

    const netSalary = grossSalary - paye - nhif - nssf; // Net salary after all deductions
    return {
        grossSalary,
        nssf,
        taxablePay,
        paye,
        nhif,
        netSalary
    };
};

// Asking the user to enter basic salary
rl.question('Enter basic salary: ', (basicSalary) => {
    // Asking the user to enter benefits
    rl.question('Enter benefits: ', (benefits) => {
        // Calculating net salary and other components
        const result = calculateNetSalary(
            parseFloat(basicSalary), // Parsing basic salary input to float
            parseFloat(benefits)     // Parsing benefits input to float
        );

        // Displaying results
        console.log(`Gross Salary: Ksh ${result.grossSalary.toFixed(2)}`);
        console.log(`NSSF: Ksh ${result.nssf.toFixed(2)}`);
        console.log(`Taxable Pay: Ksh ${result.taxablePay.toFixed(2)}`);
        console.log(`PAYE (Tax): Ksh ${result.paye.toFixed(2)}`);
        console.log(`NHIF Deduction: Ksh ${result.nhif.toFixed(2)}`);
        console.log(`Net Salary: Ksh ${result.netSalary.toFixed(2)}`);
        
        // Closing the readline interface
        rl.close();
    });
});
