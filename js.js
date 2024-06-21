const scramble = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
let array = [
  "cow",
  "rat",
  "ele",
  "lion",
  "snake",
  "frog",
  "cow",
  "rat",
  "ele",
  "lion",
  "snake",
  "frog",
];
let n = 0;
let num = 0;
let last = "";
let img = 0;
let scoore1 = 0;
let scoore2 = 0;
let nw = 0;
let l = false;
const btn = allData().btn;
const getIndexOfImg = (array) => {
  const btn = allData().btn;
  const winningDiv = allData().winningDiv;
  const score1 = allData().score1;
  const score2 = allData().score2;
  const images = allData().images;
  btn.style.display = "flex";
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      btn.style.display = "none";
      images[i].parentElement.style.transform = " rotateY(180deg)";
      images[i].parentElement.parentElement.style.transform =
        " rotateY(180deg)";

      if (l.className === images[i].className) {
        return;
      }

      if (checkIfClicked(images[i]) === "clicked") {
        return;
      }
      l = images[i];
      if (num === 1) {
        winningDiv.style.display = "flex";
        n++;
        num = 0;
        if (last !== array[i]) {
          setTimeout(() => {
            images[i].src = `${array[i]}.jpg`;
          }, 290);

          setTimeout(() => {
            winningDiv.style.display = "none";
            img.src = "blue.jpg";
            images[i].src = "blue.jpg";
          }, 900);
          last = "null";
          images[i] = "k";
          return;
        }
        if (last === array[i]) {
          if (n % 2 !== 0) {
            winningDiv.style.display = "none";

            scoore1++;
            score1.textContent = scoore1;
          }
          if (n % 2 === 0) {
            winningDiv.style.display = "none";

            scoore2++;
            score2.textContent = scoore2;
          }

          last.clicked = true;
          images[i].clicked = true;

          setTimeout(() => {
            images[i].src = `${array[i]}.jpg`;
            setTimeout(() => {
              nw++;
              checkIfWin(scoore1, scoore2);
            }, 50);
          }, 290);

          last = null;
          images[i] = "k";
          return;
        }
      }

      num++;
      last = array[i];
      img = images[i];

      setTimeout(() => {
        console.log("youho");
        images[i].src = `${array[i]}.jpg`;
      }, 290);
    });
  }
};

btn.addEventListener("click", () => {
  scramble(array);
  getIndexOfImg(array);
  btn.style.display = "none";
});
function checkIfClicked(element) {
  if (element.clicked === true) {
    return "clicked";
  }
  return "unclicked";
}
function checkIfWin(firstScore, secondScore) {
  const winningDiv = allData().winningDiv;
  const paragraph = allData().paragraph;
  const btn = allData().resetGameBtn;
  const images = allData().images;
  if (nw === 6) {
    if (firstScore > secondScore) {
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
      winningDiv.style.display = "flex";
      paragraph.textContent = "i don't know";
      btn.textContent = "reset Game";
      btn.style.display = "flex";
    }
    if (firstScore < secondScore) {
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
      winningDiv.style.display = "flex";
      paragraph.textContent = "i don't know";
      btn.textContent = "reset Game";
      btn.style.display = "flex";
    }
    if (firstScore === secondScore) {
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
      winningDiv.style.display = "flex";
      paragraph.textContent = "i don't know";
      btn.textContent = "reset Game";
      btn.style.display = "flex";
    }
  }
}

function checkIfClicked(element) {
  if (element.clicked === true) {
    return "clicked";
  }
  return "unclicked";
}
function allData() {
  let images = document.querySelectorAll("img");
  let score1 = document.querySelector(".score1");
  let score2 = document.querySelector(".score2");
  let btn = document.querySelector(".btn");
  let winningDiv = document.querySelector(".divOfWinners");
  let paragraph = document.querySelector(".paragraphOfWinners");
  let resetGameBtn = document.querySelector(".ResetGameBtn");
  return { images, score1, score2, btn, winningDiv, paragraph, resetGameBtn };
}
const resetBtn = allData().resetGameBtn;
function resetTheGame() {
  window.location = "http://127.0.0.1:5500/game-memore/js.html";
  resetBtn.style.display = "none";
}
resetBtn.addEventListener("click", resetTheGame);
