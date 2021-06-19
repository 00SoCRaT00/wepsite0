var myText = "I am Morgan Freeman  Web Developer",

    i = 0;


window.onload = function() {

    'use strick';

    var myTime1 = setInterval(function() {
        document.getElementById('P').textContent += myText[i];
        i++;

        if (document.getElementById('P').textContent.length == myText.length) {

            i = 0;
            document.getElementById('P').textContent = "";
        }
    }, 200);

    //WORKS

    var x = 0;

    var myTime2 = setInterval(function() {
        document.getElementById('count').textContent = x;
        x++;

        if (x == 451) {

            clearInterval(myTime2);
        }
    }, 10);

    //YEARS

    var y = 0;

    var myTime3 = setInterval(function() {
        document.getElementById('years').textContent = y;
        y++;

        if (y == 16) {

            clearInterval(myTime3);
        }
    }, 10);

    //clint

    var c = 0;

    var myTime4 = setInterval(function() {
        document.getElementById('clint').textContent = c;
        c++;

        if (c == 556) {

            clearInterval(myTime4);
        }
    }, 10);

    //AWARD

    var a = 0;

    var myTime5 = setInterval(function() {
        document.getElementById('award').textContent = a;
        a++;

        if (a == 37) {

            clearInterval(myTime5);
        }
    }, 10);
};