const container = document.querySelector(".petals-container");

function createPetal() {
  const petal = document.createElement("div");
  petal.innerHTML = "💗";
  petal.style.position = "absolute";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 18 + 14 + "px";
  petal.style.animation = `fall ${6 + Math.random()*4}s linear`;
  container.appendChild(petal);

  setTimeout(() => petal.remove(), 9000);
}

setInterval(createPetal, 300);
