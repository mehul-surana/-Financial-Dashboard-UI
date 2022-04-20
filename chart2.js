var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Apr-21','May-21','Jun-21'],

        datasets: [{
            label: 'Contribution',
            data: [488055,575242,632227],
            backgroundColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 1)',
                
                

            ],
            borderColor:'white',
                
                

            
            // borderWidth: 1,
            // cutout:'75%',
            // circumference:180,
            // rotation:270,
            // borderRadius:5,

        }]

    },
    options : {
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return percentage;
                },
                color: '#fff',
            }
        }
    },
    plugins:[ChartDataLabels]
    
    
});
