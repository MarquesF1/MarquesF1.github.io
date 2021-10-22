var a;
function username() {
  //get value from input field and save as "a"
  a = document.getElementById('name').value;
  //create local storage key with value of "a"
  localStorage.setItem('uName', a);
  //automatically take user to page two.html
  window.alert(item)
  location.href = "two.html"
}
