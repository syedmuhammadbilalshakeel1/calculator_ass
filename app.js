function setInput(value) {
  var input = document.getElementById("input");
  console.log("setInput", input);
  input.value += value;
}
function calcAns() {
  var input = document.getElementById("input");
  var ans = eval(input.value);
  console.log("ans", ans);
  input.value = ans;
}
function removeOne() {
  var input = document.getElementById("input");
  console.log("remove value", input);
  input.value = input.value.slice(0, -1);
}

function clearAll() {
    var input = document.getElementById("input");
    console.log("clear all value",input);
  input.value = "";
}