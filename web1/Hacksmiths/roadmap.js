// JavaScript code to control popups and boat movement
document.addEventListener("DOMContentLoaded", function () {
  const character1 = document.getElementById("character1");
  const character2 = document.getElementById("character2");
  const popup1 = document.getElementById("popup1");
  const popup2 = document.getElementById("popup2");
  const boat = document.getElementById("boat");
  let score = 0;
  let hints = 3;

  // Show popups
  character1.addEventListener("click", function () {
    popup1.style.display = "block";
    setTimeout(function () {
      popup1.style.display = "none";
    }, 2000);
  });

  character2.addEventListener("click", function () {
    popup2.style.display = "block";
    setTimeout(function () {
      popup2.style.display = "none";
    }, 2000);
  });

  // Move boat
  boat.addEventListener("click", function () {
    boat.style.left = "calc(100% - 60px)";
    score++;
    document.getElementById("score").textContent = score;
  });
});
