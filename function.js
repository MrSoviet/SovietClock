var alpha = 0;

function drawLine() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    document.getElementById("lineHour").setAttribute("x2", getX(getDegree12(hour)));
    document.getElementById("lineHour").setAttribute("y2", getY(getDegree12(hour)));
    document.getElementById("lineMinute").setAttribute("x2", getX(getDegree60(minute)));
    document.getElementById("lineMinute").setAttribute("y2", getY(getDegree60(minute)));
    document.getElementById("lineSecond").setAttribute("x2", getX(getDegree60(second)));
    document.getElementById("lineSecond").setAttribute("y2", getY(getDegree60(second)));

    console.log(hour + ":" + minute + ":" + second);
};

function getX(alpha) {
    var alphaRad = alpha * Math.PI / 180.0;
    return 200.0 * Math.cos(alphaRad) + 250.0;
}

function getY(alpha) {
    var alphaRad = alpha * Math.PI / 180.0;
    return -200.0 * Math.sin(alphaRad) + 250.0;
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

function getDegree360(x) {
    return 360 - x + 90
}

window.setInterval(drawLine, 500);

//fuck you Jimmy