import {createInterface} from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    return tax;
}


function calculateSHIF(grossSalary) {
    return grossSalary * 0.0275;
}


function calculateNSSF(grossSalary) {
    const tierILimit = 7000;
    const tierIIRate = 0.06;
    let nssf = 0;

    if (grossSalary <= tierILimit) {
        nssf = grossSalary * tierIIRate;
    } else {
        nssf = tierILimit * tierIIRate + (grossSalary - tierILimit) * tierIIRate;
    }

    return nssf;
}


function calculateHousingLevy(grossSalary) {
    return grossSalary * 0.015;
}


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




rl.question('Enter basic salary: ', (basicSalary) => {
    rl.question('Enter benefits: ', (benefits) => {
        let result = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));

        console.log(`Gross Salary: Ksh ${result.grossSalary.toFixed(2)}`);
        console.log(`PAYE (Tax): Ksh ${result.paye.toFixed(2)}`);
        console.log(`SHIF Deduction: Ksh ${result.shif.toFixed(2)}`);
        console.log(`NSSF Deduction: Ksh ${result.nssf.toFixed(2)}`);
        console.log(`Housing Levy: Ksh ${result.housingLevy.toFixed(2)}`);
        console.log(`Net Salary: Ksh ${result.netSalary.toFixed(2)}`);
        rl.close();
    });
});