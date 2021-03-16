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

    document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' + seconds;
}

klok();
setInterval(klok, 1000);

// document.getElementById('clock').innerHTML = today.toString(); 

//document.getElementById('clock').innerHTML = today.getDate();
//document.getElementById('clock').innerHTML = today.getMonth(); // Januari is maand 0
//document.getElementById('clock').innerHTML = today.getYear(); // Deprecated - niet gebruiken.
//document.getElementById('clock').innerHTML = today.getFullYear();
//document.getElementById('clock').innerHTML = today.getDay(); // Zondag is dag 0

//document.getElementById('clock').innerHTML = today.getHours();
//document.getElementById('clock').innerHTML = today.getMinutes();
//document.getElementById('clock').innerHTML = today.getSeconds();
//document.getElementById('clock').innerHTML = today.getMilliseconds();

//document.getElementById('clock').innerHTML = today.getDate() + '/' + (today.getMonth()+1);

//var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
//document.getElementById('clock').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];


//document.getElementById('clock').innerHTML = today.getTime();

