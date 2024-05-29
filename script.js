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

        // Define the radius for each corner
        var topLeftRadius = 17;
        var topRightRadius = 17;
        var bottomLeftRadius = 17;
        var bottomRightRadius = 17;

        function clearOutsideRoundedCorners() {
            var imageData = context.getImageData(0, 0, width, height);
            var data = imageData.data;

            function isOutsideRoundedCorner(x, y) {
                // Top-left corner
                if (x < topLeftRadius && y < topLeftRadius && Math.hypot(x - topLeftRadius, y - topLeftRadius) > topLeftRadius) {
                    return true;
                }
                // Top-right corner
                if (x > width - topRightRadius && y < topRightRadius && Math.hypot(x - (width - topRightRadius), y - topRightRadius) > topRightRadius) {
                    return true;
                }
                // Bottom-left corner
                if (x < bottomLeftRadius && y > height - bottomLeftRadius && Math.hypot(x - bottomLeftRadius, y - (height - bottomLeftRadius)) > bottomLeftRadius) {
                    return true;
                }
                // Bottom-right corner
                if (x > width - bottomRightRadius && y > height - bottomRightRadius && Math.hypot(x - (width - bottomRightRadius), y - (height - bottomRightRadius)) > bottomRightRadius) {
                    return true;
                }
                return false;
            }

            for (var y = 0; y < height; y++) {
                for (var x = 0; x < width; x++) {
                    var index = (y * width + x) * 4;
                    if (isOutsideRoundedCorner(x, y)) {
                        data[index + 3] = 0; // Set alpha to 0 (transparent)
                    }
                }
            }

            context.putImageData(imageData, 0, 0);
        }

        clearOutsideRoundedCorners();

        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'signature.png';
        link.href = img;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

