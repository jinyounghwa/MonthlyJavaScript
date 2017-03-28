
var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  var div = document.getElementsByClassName('content')[0];

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
div.innerHTML = picNode;

var pic = document.querySelectorAll(".content div");
pic = Array.prototype.slice.call(pic);

pic.forEach(function(el,idx1){
  var styleNode = arrayNode.map(function(item,idx2){
      pic[idx2].style.marginTop = item.height + "px";
      pic[idx2].style.marginLeft = item.width + "px";
    return item;
  });
});

});




oReq.open("GET", "../apis/list.json");
oReq.send();
