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
// 막힌거 reduce 반환을 다시 accumulator로
// 그걸 가지고 map 돌려서 li 엘레멘트의 배열로 만들고
// 마지막으로 forEach 써서 appedChild 



oReq.open("GET", "../apis/list.json");
oReq.send();
