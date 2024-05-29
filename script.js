var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
var image = document.getElementById("sliderImage");
var imagePath = "img/icons/";
var imagePathTwo = "img/avatars/";
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  updateImage(this.value);
}

function updateImage(value) {
  var imageName = value + ".PNG";
  var fullPath = imagePath + imageName;
  image.src = fullPath;
}

function showText() {
  var user = document.getElementById("Username").value;
  if (user == "") {
    alert("Write a name please!");
  }
  else if (user.includes(" ")) {
    alert("No spaces!");
  }
  else {
    document.getElementById("text-digitado").innerHTML = user;
  }

}

function showXp() {


  var numXp = document.getElementById("numXp").value;
  if (numXp == "") {
    alert("Write a number please!");
  }
  else if (numXp.includes(" ")) {
    alert("No spaces!");
  }
  else {
    document.getElementById("numXp-digitado").innerHTML = numXp;
  }

}

function showWins() {
  var numWins = document.getElementById("numWins").value;
  if (numWins == "") {
    alert("Write a number please!");
  }
  else if (numWins.includes(" ")) {
    alert("No spaces!");
  }
  else {
    document.getElementById("numWins-digitado").innerHTML = numWins;
  }

}

function switchTag() {
  document.getElementById("avatars").src="img/avatars/tag.png";
}

function switchChief() {
  document.getElementById("avatars").src="img/avatars/chief.png";
}

function switchEspresso() {
  document.getElementById("avatars").src="img/avatars/espresso.png";
}

function switchJaz() {
  document.getElementById("avatars").src="img/avatars/jaz.png";
}

function switchHale() {
  document.getElementById("avatars").src="img/avatars/hale.png";
}

function showAvatar(input) {
  if (input.files && input.files[0]) {
    var who = new FileReader();
    who.onload = function(e) {
      document.getElementById('avatars').src = e.target.result;
    }
    who.readAsDataURL(input.files[0]);
  }
}

document.getElementById("btnScreenshot").addEventListener("click", function () {
    html2canvas(document.querySelector("#screenshotdiv")).then(function (canvas) {
        var context = canvas.getContext("2d");
        var width = canvas.width;
        var height = canvas.height;
        var blockSize = 15;

        function clearBlock(x, y) {
            var imageData = context.getImageData(x, y, blockSize, blockSize);
            var data = imageData.data;

            for (var i = 0; i < data.length; i += 4) {
                if (data[i] === 190 && data[i + 1] === 76 && data[i + 2] === 228) { // Hex #BE4CE4
                    data[i + 3] = 0; // Set alpha to 0 (transparent)
                }
            }

            context.putImageData(imageData, x, y);
        }

        // Clear blocks in the corners
        clearBlock(0, 0); // Top-left corner
        clearBlock(width - blockSize, 0); // Top-right corner
        clearBlock(0, height - blockSize); // Bottom-left corner
        clearBlock(width - blockSize, height - blockSize); // Bottom-right corner

        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'signature.png';
        link.href = img;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

