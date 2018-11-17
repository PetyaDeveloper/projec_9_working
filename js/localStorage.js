const body = document.querySelector('body');
const saveBtn = document.querySelector('#save');
const removeBtn = document.querySelector('#remove');

function save(){
  var timeZone = document.querySelector('.timeZone').value;
  localStorage.setItem('text',timeZone);
}
function load(){
  var storedValue = localStorage.getItem('text');
  if(storedValue){
    document.querySelector('.timeZone').value = storedValue;
  }
}
function remove(){
  document.querySelector('.timeZone').value = ' ';
  localStorage.removeItem('text');
}
function supportsLocalStorage(){
  try{
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}

window.onload = function(){
  if(supportsLocalStorage()){
          load();
    saveBtn.addEventListener('click',()=>{
      save();
    });
    removeBtn.addEventListener('click',()=>{
      remove();
    });
  }
}
/// PLAY TOGGLE SWITCH
 var checkboxOne = document.querySelector('#checkboxOne');
 const settings = document.querySelector('.settings');

 // saveBtn.addEventListener('click',()=>{
 //
 // });
  function saveSettings() {
      localStorage.setItem('checkboxOne', JSON.stringify(checkboxOne.checked));
 //   localStorage.setItem('onoffTwo', JSON.stringify(onoffTwo.checked));
 //   localStorage.setItem('select', JSON.stringify(timezone.selectedIndex));
 }
 //
 // // Load localStorage and get values
  function loadStorage() {
      const checked = JSON.parse(localStorage.getItem('checkboxOne'));
 //   const checkedTwo = JSON.parse(localStorage.getItem('onoffTwo'));
 //   const selectValue = JSON.parse(localStorage.getItem('select'));
 //
   if (checked == false) {
     checkboxOne.removeAttribute("checked");
 //   }
 //   if (checkedTwo == false) {
 //     onoffTwo.removeAttribute("checked");
 //   }
 //   if (selectValue > 0) {
 //     timezone.selectedIndex = selectValue;
    }
  }

 // Load localStorage
 saveBtn.addEventListener('click',()=>{
   saveSettings();
    loadStorage();
 })
