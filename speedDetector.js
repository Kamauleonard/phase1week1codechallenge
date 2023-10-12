const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

function main() {
    rl.question('Enter the speed of the car: ', (speedInput) => {
        try {
            const speed = parseInt(speedInput);

            if (!isNaN(speed)) {
                calculateDemeritPoints(speed);
            } else {
                console.log("Invalid input. Please enter a numeric value.");
            }
        } catch (error) {
            console.log("An error occurred. Please try again.");
        } finally {
            // Close the readline interface
            rl.close();
        }
    });
}

main();
