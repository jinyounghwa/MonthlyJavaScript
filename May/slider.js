const rightBtn = document.querySelector("#rightBtn");
const leftBtn = document.querySelector("#leftBtn");

const wrapDivStyle = document.querySelector("#wrapDiv");
const wrapBtn = document.querySelector("#wrapBtn");
const wrapIndicator = document.querySelector("#wrapIndicator");
const getSpan = document.querySelectorAll("span");

let value = -600;

let mode = (evt) => {
	if (evt==="rightBtn") value -= 600;
	else if (evt==="leftBtn") value += 600;
}

let addStyle = (addValue) => {
	wrapDivStyle.setAttribute("style",
	"transform:translateX("+addValue+"px); transition:all 0.5s ease-in-out;");
}

wrapBtn.addEventListener("click", (evt) =>{

	let getTargetID = evt.target.id;

	mode(getTargetID);

	addStyle(value);


	let newValue = (value/(-600))-1;

	for(let i=0; i<getSpan.length; i++) getSpan[i].setAttribute("style","");

	if (newValue===(-1)) {
		newValue = 3;
		document.querySelectorAll("span")[newValue].setAttribute("style","color:gray");
	}
	else if (newValue===4) {
		newValue = 0;
		document.querySelectorAll("span")[newValue].setAttribute("style","color:gray");
	}
	if(value===0){
		setTimeout(() => {
			wrapDivStyle.setAttribute("style",
			"transform:translateX(-2400px); transition:none;");
			value = -2400;
		}, 500);
	}
	if(value===(-3000)) {
		setTimeout(() => {
			wrapDivStyle.setAttribute("style",
			"transform:translateX(-600px); transition:none;");
			value = -600;
		}, 500);
	}
});
