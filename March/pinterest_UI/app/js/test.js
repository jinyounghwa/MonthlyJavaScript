
var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  for (var key in data) {

      document.querySelector(".demo").insertAdjacentHTML("beforebegin","<div><img src=\"" + data[key].path +"\"></div>");
      //console.log(data[key].width,data[key].height);

      // setposition = Array.prototype.slice.call([setposition]);
      //var arr = [];
      //var marge = Array.prototype.push.apply(setposition);
      //console.log(arr); // 배열이 합쳐지지 않음
      //var arr3 = [...setposition];
      //console.log(arr3); // 배열이 합쳐지지 않음
      //var mgarr = arr.concat(setposition.length);
      // console.log(mgarr);

  }
  var pic = document.querySelectorAll(".content div");
  pic = Array.prototype.slice.call(pic);
  //console.log(pic);
  var newArr = data
      .map(function (el,idx){
          var top =  (el.height) * -1
          //하드코딩 : 마이너스값은 받아오는데 이걸 마진에 인라인으로 넣을 수가 없음
          //console.log(top);
          // pic[1].style.marginTop = "-164px";
          // pic[1].style.marginLeft = "240px";
          // pic[2].style.marginTop = "-240px";
          // pic[3].style.marginTop = "-404px";
          // pic[3].style.marginLeft = "240px";
          // pic[4].style.marginTop = "-240px";
          // pic[4].style.marginLeft = "240px";
          return el;
        })

    function SetTopMargin(pic,el){
      for (var i = 0; i < pic.length; i++) {
          var el = (el.height) * -1;
          console.log(el);
        //console.log(pic[i]);
        pic[i].style.marginTop = el.toString()+"px";
      }
    }

});

oReq.open("GET", "../apis/list.json");
oReq.send();
