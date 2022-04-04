// min= min.value;
// max= max.value;

var img= document.getElementById("img");
var imgup= document.getElementById("imgup");
 
  img.addEventListener("click", function(){

  var altblock= document.getElementById("alt").style.display="block";
  img.style.display="none"
  imgup.style.display="block"
  console.log(altblock)
    
  })
  var imgup= document.getElementById("imgup");
  imgup.addEventListener("click", function(){
  var altblock= document.getElementById("alt").style.display="none";
  img.style.display="block"
  imgup.style.display="none"
  
    
  })



  function send(num1, num2) {
  var result = document.getElementById("result");
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;

  min = parseFloat(min);
  max = parseFloat(max);
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  result.innerHTML = randomNumber;
}
