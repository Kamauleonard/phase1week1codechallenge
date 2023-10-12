const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Ask the user to enter their marks
rl.question('Please enter your marks: ', (marks) => {
    // Convert marks to a number
    marks = parseFloat(marks);

    // Validate if the input is a valid number
    if (isNaN(marks)) {
        console.log('Invalid input. Please enter a valid number.');
    } else {
        // Calculate the grade and display the result
        const grade = calculateGrade(marks);
        console.log(`Your grade is: ${grade}`);
    }

    // Close the readline interface
    rl.close();
});
