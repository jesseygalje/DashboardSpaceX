/*javascript snelheid*/


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