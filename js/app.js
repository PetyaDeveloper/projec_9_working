
const traffic = document.getElementsByClassName('traffic')[0];
const main = document.getElementsByClassName('main')[0];// HEADER BELL NOTIFICATION Alert

// HEADER BELL NOTIFICATION Alert
const notification = document.getElementsByClassName('notification')[0];
const bell = document.getElementsByClassName('svg')[0];
const a = document.getElementsByTagName('a');
// not to show up again the flashMessage after it has been clicked closed;
for(let i=0; i<a.length; i++){
  a[i].addEventListener('click',(e)=>{
     e.preventDefault();
  });
}
bell.addEventListener('click', (e)=>{
    notification.style.display = "none";
});
// DROP DOWN MENU!!!
   const dropdownContent = document.querySelector('.dropdown-content');

   bell.addEventListener('click',()=>{
     if(dropdownContent.style.display === 'block'){
       dropdownContent.style.display = 'none';

   } else{
     dropdownContent.style.display = 'block';
   }
   });
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

//Create a “Send” button and use JS to allow you to submit
//  the form and display a confirmation the message was sent.
// //Use JS to display error messages if user isn’t selected\
//  or message field is empty.
const sendBtn = document.querySelector('.submitBtn');
const input = document.querySelector("#searchForUser");
const textArea = document.getElementsByClassName('textArea')[0];

sendBtn.addEventListener('click',()=>{
      if(textArea.value === "" || input.value === "") {
        alert("Error: Please, write in both fields(search for user and message for user), in order to submit the form.");
        //textArea.focus();
     }else {
       alert('YOUR FORM HAS BEEN SUCCESSFULLY SUBMITTED');
   }
   });
/* dropbtn to loose the border on click */
const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener('click',()=>{
  dropbtn.style.display = 'none';
})
