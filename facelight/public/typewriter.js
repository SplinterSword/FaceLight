let j = 0;
let currentWord = "";
let isDeleting = false;
function type() {
  currentWord = "FaceLight";
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  setTimeout(type, 100);
}

type();