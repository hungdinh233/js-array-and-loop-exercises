
function countSum() {
var n = document.getElementById("input").value;
if( n== ""){
  alert("Vui lòng nhập số!")
}
  var sum = 0;
  var finalSum;
  for (var i = 2; i <= n; i++) {
    sum += i;
  }
  finalSum = sum + 2 * n;
  console.log(finalSum);
  document.getElementById("result2").innerHTML = finalSum;
}


