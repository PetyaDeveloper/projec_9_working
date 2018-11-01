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
            
            labels:["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            //fontSize: 20,
            datasets: [{
            data: [0, 500, 1000, 750, 1750, 1250,1500,1000,1500,2000,1500,2000],
            
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
var ctx = document.getElementById("myChartDonut");
var myChartDonut = new Chart(ctx, {
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
ctx.style.height = '250px';


//Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You //won't actually submit the form, just simulate the action using JavaScript.
//Use JS to display error messages if user isn’t selected or message field is empty.
const sendBtn = document.querySelector('.submitBtn');
const input = document.querySelector("#searchForUser");
const textArea = document.getElementsByClassName('textArea')[0];

sendBtn.addEventListener('click',()=>{
       if(textArea.value == "" || input.value == "") {
      alert("Error: Please, write in both fields: search for user and send a message, in order to submit the form.");
      //textArea.focus();
    }else {
        alert('YOUR FORM HAS BEEN SUCCESSFULLY SUBMITTED');
    }
    });
















