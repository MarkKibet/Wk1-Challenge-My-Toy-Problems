import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

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

rl.question('Enter car speed: ', (speed) => {
    let result = speedDetector(parseInt(speed));
    console.log(result);
    rl.close();
});
