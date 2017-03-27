var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  var divList = document.getElementsByClassName(".content");


  var listNode = data.reduce(function(prev,curr,index,array){
        var lastInfo = array[array.length - 1];
        var prevwidth = prev.x;
        var preveight = prev.y;
        if(!lastInfo) { // 이동이 없는 초기 1번째 이미지
        prevheight = 0;
        prevwidth = 0;
        } else { // 나머지 4개 이미지 x값은 marginLeft, y값은   marginTop
        curr.height = curr.y;
        curr.width = curr.x;
      }
        return curr;
},[])
  console.log(listNode);
});




oReq.open("GET", "../apis/list.json");
oReq.send();
