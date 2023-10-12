NET SALARY CALCULATOR
The program's major task is to calculate an individual's Net salary by getting the inputs of basic salary 
and benefits and then deducting the PAYE, NHIF, and NSSF. THus, Net Pay = Gross Pay - (PAYE + NHIF + NSSF).
The program is cognizant of the updated tax rates as per the Aren Document. It will also subract the housing 
levy as per the govt requirements from 1st Jul 2023.
The housing levy is 1.5 per cent of the gross pay. Thus, Net pay = Gross Pay - (PAYE + NHIF + NSSF) - (Gross Pay * 0.015).


PAYE CALCULATIONS
If an employee earns up to 24,000, the tax rate is 10%.
elseif salaries between 24001 and 32,333, the tax rate is 25%.
elseif salaries between 32,334 and 500,000, the tax rate is 30%.
elseif salaries between 500,001 and 800,000, the tax rate is 32%.
else salaries above 800,001 are charged at 35%.

function calculatePAYE(deduction) {
if (grossSalary <24,000) { 
    return grossSalary*0.01 
}else {
    (grossSalary >24001 && <32,333)
    return grossSalary*0.25 
} else {
    (grossSalary >32,334 && <500,000)
    return grossSalary*0.3
} else {
    (grossSalary >500,001 && <800,000)
    return grossSalary*0.32 
} else {
    (grossSalary <800,001)
    return grossSalary*0.35
} }

calculatePAYE(50,000);
   


NHIF CALCULATIONS

If an employee earns upto 5,999, the NHIF is 150
else if an employee earns between 6,000 and 7,999, the NHIF is 300	
else if an employee earns between 8,000 and 11,999, the NHIF is 400	
else if an employee earns between 12,000 and 14,999, the NHIF is 500	
else if an employee earns between 15,000 and 19,999, the NHIF is 600	
else if an employee earns between 20,000 and 24,999, the NHIF is 750
else if an employee earns between 25,000 and 29,999, the NHIF is 850	
else if an employee earns between 30,000 and 34,999, the NHIF is 900	
else if an employee earns between 35,000 and 39,999, the NHIF is 950
else if an employee earns between 45,000 and 49,999, the NHIF is 1,100
else if an employee earns between 50,000 and 59,999, the NHIF is 1,200
else if an employee earns between 60,000 and 69,999, the NHIF is 1,300
else if an employee earns between 70,000 and 79,999, the NHIF is 1,400
else if an employee earns between 80,000 and 89,999, the NHIF is 1,500
else if an employee earns between 90,000 and 99,999, the NHIF is 1,600
else for an employee that earns 100,000 and above, the NHIF is 1,700.

function calculateNHIF(deduction) {
if (grossSalary <24,000) { 
    return 150
} else {
    (grossSalary >6,000 && <7,999)
    return 300
} else {
    (grossSalary >8,000 && <11,999)
    return 400
} else {
    (grossSalary >12,000 && <14,999)
    return 500 
 } else {
    (grossSalary >15,000 && <19,999)
    return 600 
 } else {
    (grossSalary >20,000 && <24,999)
    return 750 
 } else {
    (grossSalary >25,000 && <29,999)
    return 850 
 } else {
    (grossSalary >30,000 && <34,999)
    return 900 
 } else {
    (grossSalary >35,000 && <39,999)
    return 950 
 } else {
    (grossSalary >45,000 && <49,999)
    return 1,100 
 } else {
    (grossSalary >50,000 && <59,999)
    return 1,200 
 } else {
    (grossSalary >60,000 && <69,999)
    return 1,300 
 } else {
    (grossSalary >70,000 && <79,999)
    return 1,400 
 } else {
    (grossSalary >80,000 && <89,999)
    return 1,500 
 } else {
    (grossSalary >90,000 && <99,999)
    return 1,600 
 } else {
    (grossSalary >100,000)
    return 1,700

 }

}

  calculateNHIF(60,000); 



NSSF CALCULATIONS
If an employee earns up to 5,999, the NHIF deduction is 6% of gross pay: (gross salary * 0.06)
else if an employee earns between 6,000 and 18,000, the NHIF deduction is (gross salary-6000)*0.06.
else, salaries above 18,001 are charged at gross (gross salary-18000)* 0.06

function calculateNSSF() {

if (grossalary < 5,999) {
    return grossSalary * 0.06
} else {
    (grossalary>6,000 && 18,000) {
    return (grossSalary - 6,000) * 0.06
} else {
    (grossalary>18,000) {
    return (grossSalary - 18,000) * 0.06

}
}

calculateNHIF(40,000); 

HOUSING LEVY CALCULATIONS
function calculateHousing (levy) {
    if (grossSalary>0)
    return (grossSalary * 0.15)
    }


COMPUTATIONS
let netPay = grossSalary - (PAYE + NHIF + NSSF)
console.log(grossSalary);
console.log(netpay)

THe first step will entail creating a function to calculate net pay after deducting PAYE.
function calculateNetPay(PAYE) {
    return (gross salary-PAYE)
}

function calculateNetPay(NHIF) {
    return (gross salary-NHIF)
}

function calculateNetPay(NSSF) {
    return (gross salary-NSSF)
}
The program will then compute all the deductions and store them in variables for ease of retrieval. 	 
