var as = document.getElementsByTagName('a');
// for (var i = 0; i < as.length; i++) {
//   (function(i){
//     as[i].onclick = function() {
//       alert(i);
//       return false;
//     }
//   }(i))
// }

for (let i = 0; i < as.length; i++) {
  as[i].onclick = function() {
    alert(i);
    return false;
  }
}