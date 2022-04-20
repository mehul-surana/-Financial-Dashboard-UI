var ctx = document.getElementById('lineChart-1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Apr-21','May-21','Jun-21'],
        datasets: [{
            label: 'Total Expenses',
            data: [859780,914345,830499],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 205, 86, 0.2)',



            // ],
            borderColor: ['rgb(255, 99, 132)',
            'rgb(54, 162, 235)','rgb(255, 205, 86)',
        ],
        
        borderWidth: 3,
        // fill:false,
        // tension:0.1

        }]
    },
    options: {
        responsive: true,
        
    }
});