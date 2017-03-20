var oReq = new XMLHttpRequest();
oReq.addEventListener('load',function(evt){
  var data = JSON.parse(this.responseText);
  var div = document.getElementsByClassName('content')[0];
  var html = data.map(function(v,i) {

    return "<div><img src=\"" + v.path +"\"></div>";
}).join('');
div.innerHTML = html;
});

// var oReq = new XMLHttpRequest();
// oReq.addEventListener('load',function(evt){
//   var data = JSON.parse(this.responseText);
//       function getFields(list, field, otherwise) {
//         return list.map(function(item) {
//
//         return typeof item === 'object' && field in item ? item[field] : otherwise;
//     }).map(function(width, height, path){
//
// },[]);
//
// }
//
// });
oReq.open("GET", "../apis/list.json");
oReq.send();
