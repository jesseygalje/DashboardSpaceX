/*javascript snelheid*/
var snelheid = 62000;

document.getElementById('getal').innerHTML = snelheid;
document.getElementById('aantal').style.width = snelheid/1000+'%';

document.getElementById('gasbij').onclick = function(){
    snelheid += 1200;
    
    if (snelheid > 100000) {
        snelheid = 100000;
    }

    document.getElementById('getal').innerHTML = snelheid;
    document.getElementById('aantal').style.width = snelheid/1000+'%';
};

document.getElementById('remaf').onclick = function(){
    snelheid -= 1200;

    if (snelheid < 0) {
        snelheid = 0;
    }

    document.getElementById('getal').innerHTML = snelheid;
    document.getElementById('aantal').style.width = snelheid/1000+'%';
};



/*javascript g krachten*/
var ctx = document.getElementById('gkrachten').getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',

    data: {
        labels: ['G-krachten op het moment'],
        datasets: [{
            borderColor: 'black',
            backgroundColor: ['#005288', 'white'],
            data: [4.2, 1.1]
        }]
    },

    options: {
        responsive: false,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: true
    }
});

/*javascript brandstofgebruik*/
var ctx = document.getElementById('brandstofgebruik').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['0', '10', '20', '30', '40', '50', '60'],
        datasets: [{
            label: 'Brandstofgebruik per 10 miljoen km in %',
            borderColor: '#005288',
            data: [0, 22, 35, 42, 57]
        }]
    },

    options: {
        responsive: false,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: true
    }
});