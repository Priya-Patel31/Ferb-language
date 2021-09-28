var input = document.querySelector("#input-text");
var output = document.querySelector("#output-text");

var  button = document.querySelector("#btn");
var url ="https://api.funtranslations.com/translate/ferb-latin.json";

function DoFetch(){
   var query = url+"?text="+input.value;
console.log(input.value);
  fetch(query)
  .then((response) => response.json())
  .then((json) =>output.value = json.contents.translated);
}
button.addEventListener("click", DoFetch);
