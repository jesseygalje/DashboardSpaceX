/*javascript snelheid*/
var snelheid = 62000;

document.getElementById('getal').innerHTML = snelheid;
document.getElementById('aantal').style.width = snelheid/1000+'%';

document.getElementById('gasbij').onclick = function(){
    snelheid += 1200;
    document.getElementById('getal').innerHTML = snelheid;
    document.getElementById('balk').style.width = snelheid/1000+'%';
};

document.getElementById('remaf').onclick = function(){
    snelheid -= 1200;
    document.getElementById('getal').innerHTML = snelheid;
    document.getElementById('balk').style.width = snelheid/1000+'%';
};

/*javascript g krachten*/


/*javascript brandstofgebruik*/
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '10', '20', '30', '40', '50', '60'],
        datasets: [{
            label: 'Brandstofgebruik per 10 miljoen km in procenten',
            borderColor: 'black',
            data: [0, 22, 35, 42]
        }]
    },

    // Configuration options go here
    options: {}
});