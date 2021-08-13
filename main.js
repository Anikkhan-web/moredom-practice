

document.getElementById('new-text').addEventListener('click',function(){

  const pra =  document.getElementById('clicking-method');
  pra.innerText="created by anik khan ";


})

document.getElementById('update-name').addEventListener('click',function(){

  const nameField =  document.getElementById('name-field');
  
  const pra =  document.getElementById('clicking-method');
  pra.innerText=nameField.value;
  nameField.value = '';

})