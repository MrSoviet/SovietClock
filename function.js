class ClockDate {
    getClockHours(today = new Date()) {
        const hour = today.getHours();
        const minutes = this.getClockMinutes(today);

        const clockHours = hour + (minutes / 60);
        return clockHours;
    }

    getClockMinutes(today = new Date()) {
        const minutes = today.getMinutes();
        const seconds = this.getClockSeconds(today);

        const clockMinutes = minutes + (seconds / 60);
        return clockMinutes;
    }

    getClockSeconds(today = new Date()) {
        const seconds = today.getSeconds();
        const milliseconds = today.getMilliseconds();

        const clockSeconds = (seconds + (milliseconds / 1000));
        return clockSeconds;
    }

    getSBBClockSeconds(today = new Date()) {
        const clockSeconds = this.getClockSeconds(today) * 1.025641025641025641025641025641;
        if (clockSeconds <= 60) {
            return clockSeconds;
        } else {
            return 60;
        }
    }
}

const clock = new ClockDate();

function drawLine() {
    // const today = new Date();
    // const hour = clock.getClockHours(today);
    // const minute = today.getMinutes();
    // const second = clock.getSBBClockSeconds(today);

    const hour = 10.2;
    const minute = 9;
    const second = 36.75;

    document.getElementById("lineHour").setAttribute("x2", getX(getDegree12(hour), 0.5));
    document.getElementById("lineHour").setAttribute("y2", getY(getDegree12(hour), 0.5));
    document.getElementById("lineMinute").setAttribute("x2", getX(getDegree60(minute), 0.9));
    document.getElementById("lineMinute").setAttribute("y2", getY(getDegree60(minute), 0.9));
    document.getElementById("lineSecond").setAttribute("x2", getX(getDegree60(second)));
    document.getElementById("lineSecond").setAttribute("y2", getY(getDegree60(second)));

    console.log(hour + ":" + minute + ":" + second);
};

function getX(alpha, factor = 1) {
    var alphaRad = alpha * Math.PI / 180.0;
    return (200.0 * factor) * Math.cos(alphaRad) + 250.0;
}

function getY(alpha, factor = 1) {
    var alphaRad = alpha * Math.PI / 180.0;
    return (-200.0 * factor) * Math.sin(alphaRad) + 250.0;
}

function getDegree12(hour) {
    var hour12 = hour > 12 
        ? hour - 12 
        : hour;

    return 360 - 30 * hour12 + 90;
}

function getDegree60(minute) {
    return 360 - 6 * minute + 90;
}

window.setInterval(drawLine, 10);