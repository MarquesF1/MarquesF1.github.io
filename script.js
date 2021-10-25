var a;
function saveName() {
  //get value from input field and save as "a"
  fieldValue = document.getElementById('textfield').value;
  //create local storage key with value of "a"
  localStorage.setItem('userName', fieldValue);
  //automatically take user to page two.html
  location.href = "two.html"
}

