function klok() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hours = today.getHours();

    if (hours >= 9 && hours < 21) {
        document.getElementById('clock').classList.remove('night');
        document.getElementById('clock').classList.add('day');
        document.body.style.backgroundColor = "#e0e0e0";
    } else {
        document.getElementById('clock').classList.remove('day');
        document.getElementById('clock').classList.add('night');
        document.body.style.backgroundColor = "#2F3136";
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    document.getElementById('clock').innerHTML = 'Tijd: ' + today.getHours() + ':' + minutes + ':' + seconds;
}

function datum() {
    var today = new Date();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hours = today.getHours();
    var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

    if (hours >= 9 && hours < 21) {
        document.getElementById('date').classList.remove('night');
        document.getElementById('date').classList.add('day');
    } else {
        document.getElementById('date').classList.remove('day');
        document.getElementById('date').classList.add('night');
    }

    document.getElementById('date').innerHTML = 'Datum: ' + today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();
}

klok();
setInterval(klok, 1000);

datum();
setInterval(datum, 1000);