var btn = document.querySelector('.d1');
btn.addEventListener("click", function(e){

  var setting = { "관리": { label: "관리", lm: 0 , button:"none"},
                  "확인": { label: "확인", lm: 90 , button:"inline"}}

      [(btn.innerHTML === "관리") ? "확인": "관리"];

  btn.innerHTML = setting.label;
  document
    .querySelectorAll('dd img')
    .forEach(function (el) { el.style.marginLeft = setting.lm + "px"; });
  document
  	.querySelectorAll('dd button')
  	.forEach(function (ele) { ele.style.display = setting.button; });
});


function button_click() {
	var myNode = null;
	if(myNode === null) {
		myNode = document.getElementById("checkList");
		myNode.parentNode.removeChild(myNode);
	} else {
		return false;
	}
}


