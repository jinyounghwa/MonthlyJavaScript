
var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  for (var key in data) {



      // document.querySelector(".demo").insertAdjacentHTML("beforebegin","<div><img src=\"" + data[key].path +"\"></div>");
      //console.log(data[key].width,data[key].height);

      // setposition = Array.prototype.slice.call([setposition]);
      //var arr = [];
      //var marge = Array.prototype.push.apply(setposition);
      //console.log(arr); // 배열이 합쳐지지 않음
      //var arr3 = [...setposition];
      //console.log(arr3); // 배열이 합쳐지지 않음
      //var mgarr = arr.concat(setposition.length);
      // console.log(mgarr);
      // var pic = document.querySelectorAll(".content div");
      // pic = Array.prototype.slice.call(pic);
      // var top =  (data[key].height) * -1;
      // for (var i = 0; i < pic.length; i++) {
      //     console.log(top);
      //     pic[i].style.marginTop = top+"px";
      // }

  }
  // var pic = document.querySelectorAll(".content div");
  // pic = Array.prototype.slice.call(pic);
  //console.log(pic);
  // var newArr = data
  //     .map(function (el,idx){
  //         var top =  (el.height) * -1
          //하드코딩 : 마이너스값은 받아오는데 이걸 마진에 인라인으로 넣을 수가 없음
          //console.log(top);
          // pic[1].style.marginTop = "-164px";
         // pic[1].style.marginLeft = "240px";
          // pic[2].style.marginTop = "-240px";
          // pic[3].style.marginTop = "-404px";
          // pic[3].style.marginLeft = "240px";
          // pic[4].style.marginTop = "-240px";
        // pic[4].style.marginLeft = "240px";
        //   return el;
        // })


});

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load',function(evt){
//   var data = JSON.parse(this.responseText);
//   var div = document.getElementsByClassName('content')[0];
//   var html = data.map(function(item,idx) {
//         // idx가 0일 때 아무런 이동이 없기 때문에 조건 추가
//       var top = item.height;
//       var left = item.width;
//       if (left !== 0 ) {
//         console.log('ok');
//       } else {
//
//       }
//           return item;
//       }).map(function(item){
//         return "<div><img src=\"" + item.path +"\"></div>";
//     }).join('');
//
// div.innerHTML = html;
// });
//


oReq.open("GET", "../apis/list.json");
oReq.send();


// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load',function(evt){
//   var data = JSON.parse(this.responseText);
//   var div = document.getElementsByClassName('content')[0];
//
//   var html = data.map(function(item,idx) {
//
//         // Array.prototype.map.call(datafunction(){})
//         var prevIdx = idx - 1;
//         var idx = idx;
//         var wr = item.height - item.width;
//         var height = item.height;
//         var width = item.width;
//         console.log(wr);
//       return {
//         wheight : wr,
//         path : item.path
//       };
//       }).map(function(item){
//
//         return "<div><img src=\"" + item.path +"\"></div>";
//     }).join('');
//
// div.innerHTML = html;
// });
//
//
//
//
// oReq.open("GET", "../apis/list.json");
// oReq.send();


//
// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load',function(evt){
//   var data = JSON.parse(this.responseText);
//   var div = document.getElementsByClassName('content')[0];
//
//   var html = data.map(function(item,idx) {
//
//         // Array.prototype.map.call(data,function(){})
      // var arrheight = [Object.values(item)[1]];
      // var arr = [];
      // for(var i =0; i < arrheight.length; i++){
      //     arr = arrheight[i];
      // }
      // return arr;
      // })
//
// });
//
// });
//
//
//
//
// oReq.open("GET", "../apis/list.json");
// oReq.send();
