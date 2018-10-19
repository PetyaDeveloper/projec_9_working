const traffic = document.getElementsByClassName('traffic')[0];
const main = document.getElementsByClassName('main')[0];

//append flashMessage section above the traffic section and
// make it disappear on click

const flashMessage = document.createElement('section');
flashMessage.innerHTML = '<p><strong>Alert:</strong>Hello from my cool app. It is really hard but fun,s well and i will somehow make it.Press the X button to close this message.</p><button>X</button>';

main.insertBefore(flashMessage, traffic);
flashMessage.className = 'flashMessage';
const flashMessageBtn = document.querySelector('.flashMessage button');
console.log(flashMessageBtn);

flashMessageBtn.addEventListener('click',()=>{
  flashMessage.style.display = 'none';
});
// jquery proaba
$('nav').click(function(){
  alert('u clicked with jquery');
});
// initialize the chart plugin

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            //label: 'none',
            labels:["16-22", "23-299", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
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

// CHART 2
var ctx = document.getElementById("myChartBar");
var myChartBar = new Chart(ctx, {
        type: 'bar',
        data: {
            //label: 'none',
            labels:["16-22", "23-299", "30-5", "6-12", "13-19", "20-26", "27-3"],
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
            //label: 'none',
            labels:["16-22", "23-299", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
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
            }
        },
       responsive:true
});
ctx.style.height = '250px';
