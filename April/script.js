


var buttonfiled = document.querySelector(".buttonfiled");
function newItemNode(inputValue) {


  buttonfiled.innerHTML += '<button>'+ inputValue + '</button>';

}



var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  newItemNode(inputValue);
});
