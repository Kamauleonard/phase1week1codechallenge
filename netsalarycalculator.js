function calculatePAYE(grossSalary) {
  if (grossSalary <= 24000) {
      const paye = grossSalary * 0.1;
      return paye;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
       const paye = ((24000) * 0.1)  +  ((grossSalary - 24000) * 0.25);
      return paye;
  } else if (grossSalary > 32333 && grossSalary <= 500000) {
    const paye = ((24000) * 0.1)  +  ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
      return paye;

  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    const paye = ((24000) * 0.1)  +  ((32333 - 24000) * 0.25) + ((50000 - 32333) * 0.3) + ((grossSalary - 500000) * 0.32);
      return paye;
  } else {
    const paye = ((24000) * 0.1)  +  ((32333 - 24000) * 0.25) + ((50000 - 32333) * 0.3) + ((800000 - 500000) * 0.32) + ((grossSalary - 800000) * 0.35);
      return paye;
  }
}

function calculateNHIF(grossSalary) {
  if (grossSalary <= 5999) {
      return 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      return 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      return 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      return 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      return 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      return 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      return 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      return 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      return 950;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      return 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      return 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      return 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      return 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      return 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      return 1600;
  } else {
      return 1700;
  }
}

function calculateNSSF(grossSalary) {
  if (grossSalary <= 5999) {
      return grossSalary * 0.06;
  } else if (grossSalary >= 6000 && grossSalary <= 18000) {
      return (grossSalary - 6000) * 0.06;
  } else {
      return (grossSalary - 18000) * 0.06;
  }
}

function calculateHousing(grossSalary) {
  return grossSalary * 0.015;
}

function calculateNetPay(grossSalary) {
  const PAYE = calculatePAYE(grossSalary);
  const NHIF = calculateNHIF(grossSalary);
  const NSSF = calculateNSSF(grossSalary);
  const housingLevy = calculateHousing(grossSalary);

  const netPay = grossSalary - (PAYE + NHIF + NSSF + housingLevy);
  return netPay;
}
function main() {
  const readline = require('readline-sync');
  

  const grossSalary = parseFloat(readline.question('Enter Gross Salary: '));
  

  const netPay = calculateNetPay(grossSalary);
  console.log("Gross Salary:", grossSalary);
  console.log("Net Pay:", netPay);
}


main();
