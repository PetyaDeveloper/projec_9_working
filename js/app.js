const traffic = document.getElementsByClassName('traffic')[0];
const main = document.getElementsByClassName('main')[0];// HEADER BELL NOTIFICATION Alert

// HEADER BELL NOTIFICATION Alert

const notification = document.getElementsByClassName('notification')[0];
const bell = document.getElementsByClassName('svg')[0];

//append flashMessage section above the traffic section and
// make it disappear on click

const flashMessage = document.createElement('section');
flashMessage.innerHTML = '<p><strong>Alert:</strong>Hello from my cool app. It is really hard but fun,s well and i will  make it.Press the X button to close this message.</p><button>X</button>';

main.insertBefore(flashMessage, traffic);
flashMessage.className = 'flashMessage';
const flashMessageBtn = document.querySelector('.flashMessage button');

flashMessageBtn.addEventListener('click',()=>{
  flashMessage.style.display = 'none';
});

// BELL NOTIFICATION MESSAGSES

//const notification = document.getElementsByClassName('notification')[0];
//const bell = document.getElementsByClassName('svg')[0];
const array = ['You have 3 notifications:', '2 e-mails', 'Doctor\'s appointment at 2', 'Salsa lesson at 5'];

function notificationsList(arr){
    var listHTML = '<ol>';
    for(let i=0; i<arr.length; i++){
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
}

bell.addEventListener('click',(e)=>{
   e.preventDefault();
   notification.style.display = 'none';
    console.log(notificationsList(array));
});

// initialize the chart plugin

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            //label: 'none',
            labels:["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            //fontSize: 20,
            datasets: [{
            data: [0, 5, 3, 8, 9, 3,0,9,6,12,18],
            backgroundColor: '#e6e6ff',
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
                    beginAtZero:true
                }
            }]
        }
    },
    responsive:true
});
ctx.style.height = '250px';

// CHART 2
var ctx = document.getElementById("myChartBar");
var myChartBar = new Chart(ctx, {
        type: 'bar',
        data: {
            //label: 'none',
            labels:["S", "M", "T", "W", "T", "F", "S"],
            //fontSize: 20,
            datasets: [{
            data: [0, 5, 3, 8, 9, 3,0,9,6,12,18],
            backgroundColor: '#7979d2',
           borderColor: '#751aff',
           borderWidth: 1
        }]
    },
    options: {
      legend: {
           display: false
        },
        scales:{yAxes: [{
                ticks: {beginAtZero:true}
               }]
    }
    },
    responsive:true
});
// CHART 3 DONUT
var ctx = document.getElementById("myChartDonut");
var myChartDonut = new Chart(ctx, {
        type: 'doughnut',
        data: {
               labels: [
        'Red',
        'Yellow',
        'Blue'
    ],
            //label: 'mobile',
            //labels:["16-22", "23-299", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            //fontSize: 20,
            datasets: [{
            data: [0, 5, 3, 8, 9, 3,0,9,6,12,18],
            backgroundColor: '#e6e6ff',
           borderColor: '#751aff',
           borderWidth: 1
           }]
        },
        options: {
          legend: {
               display: true,
            }
        },
       responsive:true
});
ctx.style.height = '250px';





















