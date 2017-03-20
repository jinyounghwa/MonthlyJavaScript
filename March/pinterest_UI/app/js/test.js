var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  var div = document.getElementsByClassName('content')[0];

  var html = data.map(function(item,idx) {
        var prevIdx = idx - 1;
        var idx = idx;
        var wr = item.height - item.width; // 이건되는데
        var wr2 = item.height[prevIdx] - item.height; // 이건 왜 NaN인겨..ㅠㅠ 
        var height = item.height;
        var width = item.width;
        console.log(wr);
      return {
        wheight : wr,
        path : item.path
      };
      }).map(function(item){

        return "<div><img src=\"" + item.path +"\"></div>";
    }).join('');

div.innerHTML = html;
});




oReq.open("GET", "../apis/list.json");
oReq.send();
