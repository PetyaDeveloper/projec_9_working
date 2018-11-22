// const body = document.querySelector('body');
// const saveBtn = document.querySelector('#save');
// const removeBtn = document.querySelector('#remove');

// function save(){
//   var timeZone = document.querySelector('.timeZone').value;
//   localStorage.setItem('text',timeZone);
// }
// function load(){
//   var storedValue = localStorage.getItem('text');
//   if(storedValue){
//     document.querySelector('.timeZone').value = storedValue;
//   }
// }
// function remove(){
//   document.querySelector('.timeZone').value = ' ';
//   localStorage.removeItem('text');
// }
// function supportsLocalStorage(){
//   try{
//     return 'localStorage' in window && window['localStorage'] !== null;
//   } catch(e){
//     return false;
//   }
// }
// body.onload = function(){
//   load();
// }
// window.onload = function(){
//   if(supportsLocalStorage()){
//           load();
//     saveBtn.addEventListener('click',()=>{
//       save();
//     });
//     removeBtn.addEventListener('click',()=>{
//       remove();
//     });
//   }
// }
/// PLAY TOGGLE SWITCH
let checkboxOne = document.querySelector('#checkboxOne');
let checkboxTwo = document.querySelector('#checkboxTwo');
let timeZone = document.querySelector('.timeZone');
const label = document.querySelectorAll('.switch');

function saveSettings(){
  localStorage.setItem('checkboxOne',JSON.stringify(checkboxOne.checked));
  localStorage.setItem('checkboxTwo',JSON.stringify(checkboxTwo.checked));
  localStorage.setItem('select',JSON.stringify(timeZone.selectedIndex));
}
function loadSettings(){
  const checked = JSON.parse(localStorage.getItem('checkboxOne'));
  const checkedTwo = JSON.parse(localStorage.getItem('checkboxTwo'));
  const selectValue = JSON.parse(localStorage.getItem('select'));

  if(checked == false){
    checkboxOne.removeAttribute('checked');
  }
  if(checkedTwo == false){
    checkboxTwo.removeAttribute('checked');
  }
  if(selectValue > 0){
    timeZone.selectedIndex = selectValue;
  }
}
//});

loadSettings();
function removeSettings(){
  localStorage.clear();
}














 //end
