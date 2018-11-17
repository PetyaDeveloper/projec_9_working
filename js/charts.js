// hide input radio circles
//var inputHourly = document.getElementById('hourly');
//var inputDaily = document.getElementById('daily');
//
//function displayNone(element){
//  element.style.display = "none";
//}
//displayNone(inputHourly);
//displayNone(inputDaily);

//initialize the chart plugin
var chartOne = document.getElementById("myChart");
var myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "29-33", "34-38", "39-43", "44-48", "49-52"],
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


// *********************    HOURLY

const hourly = document.querySelector('#hourly');
const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
const trafficLineChart = document.querySelector('.traffic');

// **** CLICKABLE CHARTS CHANGE: HOURLY,DAILY, WEEKLY, MONTHLY

trafficLineChart.addEventListener('click',(e)=>{
  if(e.target.tagName === 'A'){
    if(e.target.textContent == 'Hourly'){
      myChart.destroy();
     
      myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:["0 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10am","11am","12am","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm","10 pm","11 pm",],
                        //fontSize: 20,
            datasets: [{
            data: [27, 50, 45, 40,80,70,50,75,80,150,259,200,300,350,300,400,450,440,400,450,300,250,200,150,50],
            backgroundColor: [
                       'rgba(102,153,255,0.2)',
                       'rgba(54, 162, 235, 0.2)',
                       'rgba(255, 206, 86, 0.2)',
                       'rgba(75, 192, 192, 0.2)',
                       'rgba(153, 102, 255, 0.2)',
                       'rgba(102,153,255,0.2)'    
                       ],
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
                    suggestedMax: 250,
                    stepSize: 50
                },

            }]
        }
    },
    responsive:true
});
chartOne.style.height = '250px';
    }
          if(e.target.textContent == 'Daily'){
      myChart.destroy();
      myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                        //fontSize: 20,
            datasets: [{
            data: [300,800,500,700,100,600,700],
            backgroundColor: [
                        'rgba(102,153,255,0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(102,153,255,0.2)'
                       ],
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
                    suggestedMin: 100,
                    suggestedMax: 900,
                    stepSize: 100
                },

            }]
        }
    },
    responsive:true
});
chartOne.style.height = '250px';
    }
      
     if(e.target.textContent == 'Weekly'){
        myChart.destroy();
        myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "29-33", "34-38", "39-43", "44-48", "49-52"],
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
    }      
       if(e.target.textContent == 'Monthly'){
        myChart.destroy();
        myChart = new Chart(chartOne, {
        type: 'line',
        data: {

            labels:['January','February','March','April','May','June','July','August','September','October','November','December'],
            datasets: [{
            data: [10000, 50000,18000,25000,72000,33000,15000,50000,43000,55000,70000,31000],
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
                    suggestedMin: 10000,
                    suggestedMax: 90000,
                    stepSize: 10000
                },

            }]
        }
    },
    responsive:true
});
        
chartOne.style.height = '250px';
    }      
      
  }                              
});






















