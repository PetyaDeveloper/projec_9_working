var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
        type: 'line',
        data: {

            labels:['1am','2am','3am','4am','5am','6am','7am','8am','9am','10am','11am',
            '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm'],
            //fontSize: 20,
            datasets: [{
            data: [0, 500, 1000, 750, 1750, 1250,1500,1000,1500,2000,1500,2000],
            backgroundColor: [
                           'rgba(102,153,255,0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(102,153,255,0.2)'
                       ],
            // backgroundColor: '#e6e6ff',
           borderColor: '#751aff',
           borderWidth: 1
        }]
    },
    options: {
      legend: {
           display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false,
                    suggestedMin: 50,
                    suggestedMax: 300,
                    stepSize: 10
                },

            }]
        }
    },
    responsive:true
});
ctx.style.height = '250px';
const hourly = document.querySelector('#hourly');

hourly.addEventListener('click',()=>{

});
