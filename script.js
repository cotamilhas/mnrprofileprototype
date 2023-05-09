var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
var image = document.getElementById("sliderImage");
var imagePath = "img/icons/"; // Caminho para as imagens
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  updateImage(this.value);
}

function updateImage(value) {
  var imageName = value + ".png";
  var fullPath = imagePath + imageName;
  image.src = fullPath;
}

function mostrarTexto() {
  var texto = document.getElementById("texto").value;
  if(texto == ""){
    alert("Write a name please!");
  }
  else if(texto.includes(" ")){
    alert("No spaces!");
  }
  else{
    document.getElementById("texto-digitado").innerHTML = texto;
  }
  
}

function mostrarXp() {
  

  var numXp = document.getElementById("numXp").value;
  if(numXp == ""){
    alert("Write a name please!");
  }
  else if(numXp.includes(" ")){
    alert("No spaces!");
  }
  else{
    document.getElementById("numXp-digitado").innerHTML = numXp;
  }
  
}

function mostrarWins() {
  var numWins = document.getElementById("numWins").value;
  if(numWins == ""){
    alert("Write a number please!");
  }
  else if(numWins.includes(" ")){
    alert("No spaces!");
  }
  else{
    document.getElementById("numWins-digitado").innerHTML = numWins;
  }
  
}

document.getElementById("btnScreenshot").addEventListener("click", function() {
  // Captura a div
  html2canvas(document.querySelector("#minha-div")).then(function(canvas) {
    // Cria uma imagem para download
    var img = canvas.toDataURL("image/png");
    // Cria um link para download
    var link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = img;
    // Adiciona o link ao documento
    document.body.appendChild(link);
    // Clica no link para iniciar o download
    link.click();
    // Remove o link do documento
    document.body.removeChild(link);
  });
});