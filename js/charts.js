// hide input radio circles
var inputHourly = document.getElementById('hourly');
var inputDaily = document.getElementById('daily');

function displayNone(element){
  element.style.display = "none";
}
displayNone(inputHourly);
displayNone(inputDaily);

// function check() {
//     document.getElementById("red").checked = true;
// }
//
// function uncheck() {
//     document.getElementById("red").checked = false;
// }

//initialize the chart plugin
var chartOne = document.getElementById("myChart");
var myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
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
                    suggestedMin: 550,
                    suggestedMax: 2500,
                    stepSize: 500
                },

            }]
        }
    },
    responsive:true
});
chartOne.style.height = '250px';

// CHART 2
var ctxBar = document.getElementById("myChartBar");
var myChartBar = new Chart(ctxBar, {
        type: 'bar',
        data: {
            //label: 'none',

            labels:["S", "M", "T", "W", "T", "F", "S"],
            //fontSize: 20,
            datasets: [{

            data: [50, 80, 150, 100, 200, 180,75],
            backgroundColor: '#7979d2',
           borderColor: '#751aff',
           borderWidth: 1
        }]
    },
    options: {
      legend: {
           display: false
        },
        scales:{
        yAxes: [{
      gridLines: {display: true},

              ticks: {beginAtZero:true,
                       suggestedMin: 50,
                    suggestedMax: 250,
                    stepSize: 50
                       }
               }]
        },
      },
    responsive:true,
    barThickness: 1
});
// CHART 3 DONUT
var ctxDonut = document.getElementById("myChartDonut");
var myChartDonut = new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
               labels: [ 'Phones', 'Tablets', 'Desktop'],

           datasets: [{
           data: [20,15,65],
           backgroundColor: ['#809fff','#66cc66','#666699'],
           borderColor: '#751aff',
           borderWidth: 1
           }]
        },
        options: {
            layout: {
            padding: {
                left: 0,
                right: 70,
                top: 30,
                bottom: 0
            }
        },
          legend: {
//            display: true,
              position: 'right',
              labels: {
                  boxWidth: 15,
                  padding: 20
              },
          },

        },
       responsive:true
});
// ctx.style.height = '250px';

// HOURLY
const hourly = document.querySelector('#hourly');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const trafficLineChart = document.querySelector('.traffic');

function createHourlyChart(){
  var chartHourly = document.createElement("canvas");
  const ctx = chartHourly.getContext('2d');
  ctx.fillStyle = 'orange';
  ctx.fillRect(0,0,150,75);
  const canvas = document.querySelector('.plugin');
  //canvas.style.display = '';
  console.log(canvas);
  canvas.appendChild(chartHourly);

  // var node = document.createTextNode("This is new.");
  // para.appendChild(node);
}
trafficLineChart.addEventListener('click',(e)=>{
  if(e.target.tagName == 'INPUT'){
    //removes all prev charts
    const myChart = document.getElementById('myChart');
    myChart.style.display = 'none';
  }
});
