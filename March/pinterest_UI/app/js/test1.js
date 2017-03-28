
var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  var div = document.getElementsByClassName('content')[0];
  var pic = document.querySelectorAll(".content div");
  pic = Array.prototype.slice.call(pic);
  var arrayNode = [];
  var listNode = data.reduce(function(prev,curr,index,array){
        var lastInfo = array[array.length - 1];
        var prevwidth = prev.x;
        var preveight = prev.y;
        if(!lastInfo) { // 이동이 없는 초기 1번째 이미지
        prevheight = 0;
        prevwidth = 0;
        } else { // 나머지 4개 이미지 x값은 marginLeft, y값은marginTop
        curr.height = curr.y;
        curr.width = curr.x;
      }

        return arrayNode.push(curr);
},[])
  var picNode = arrayNode.map(function(item){

    return "<div><img src=\"" + item.path +"\"></div>";
}).join('');
  var styleNode = arrayNode.map(function(item,idx){
    console.log(item,idx);
       // pic[idx].style.marginTop = item.height + 'px';
      // pic[idx].style.marginLeft = item.width + 'px';

    return item;
  });
div.innerHTML = picNode;
});




oReq.open("GET", "../apis/list.json");
oReq.send();
