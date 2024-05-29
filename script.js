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
        var radius = 17;

        function createRoundedClipPath(ctx, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(radius, 0);
            ctx.lineTo(width - radius, 0);
            ctx.quadraticCurveTo(width, 0, width, radius);
            ctx.lineTo(width, height - radius);
            ctx.quadraticCurveTo(width, height, width - radius, height);
            ctx.lineTo(radius, height);
            ctx.quadraticCurveTo(0, height, 0, height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
            ctx.closePath();
            ctx.clip();
        }

        // Save the context in its unaltered state
        context.save();

        // Clear the canvas by filling it with a transparent background
        context.clearRect(0, 0, width, height);

        // Create a clipping region with rounded corners
        createRoundedClipPath(context, width, height, radius);

        // Draw the original canvas content into the clipping region
        context.drawImage(canvas, 0, 0);

        // Restore the context to its unaltered state
        context.restore();

        var img = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'signature.png';
        link.href = img;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

