const scramble = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
let array = ["cow", "rat", "lion", "cow", "rat", "lion"];
let n = 0;
let num = 0;
let last = "";
let img = 0;
let scoore1 = 0;
let scoore2 = 0;
let nw = 0;
let sss = "";
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
      images[i].parentElement.style.transform = " rotateY(180deg)";
      images[i].parentElement.parentElement.style.transform =
        " rotateY(180deg)";
      if (sss.className === images[i].className) {
        return;
      }
      if (checkIfClicked(images[i]) === "clicked") {
        console.log("sleee");
        return;
      }
      sss = images[i];
      if (num === 1) {
        winningDiv.style.display = "flex";
        n++;
        num = 0;
        if (last !== array[i]) {
          console.log("ll", last, array[i]);
          setTimeout(() => {
            images[i].src = `${array[i]}.jpg`;
          }, 290);

          setTimeout(() => {
            winningDiv.style.display = "none";
            img.src = "blue.jpg";
            images[i].src = "blue.jpg";
          }, 1200);
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
        images[i].src = `${array[i]}.jpg`;
      }, 290);
    });
  }
};

btn.addEventListener("click", () => {
  scramble(array);
  getIndexOfImg(array);
  console.log(array);
  btn.style.display = "none";
});
function checkIfClicked(element) {
  if (element.clicked === true) {
    return "clicked";
  }
  return "unclicked";
}

function checkIfWin(firstScore, secondScore) {
  console.log(nw);
  const winningDiv = allData().winningDiv;
  const paragraph = allData().paragraph;
  const btn = allData().resetGameBtn;
  const images = allData().images;
  if (nw === 3) {
    if (firstScore > secondScore) {
      winningDiv.style.display = "flex";
      btn.style.display = "flex";
      btn.textContent = "reset Game";
      console.log("2u59275927597597925olssllllllllllllltalalalala");
      paragraph.textContent = "first wins !!";
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
    }
    if (firstScore < secondScore) {
      console.log("winnnnnnnnnnnnn");
      winningDiv.style.display = "flex";
      btn.style.display = "flex";
      btn.textContent = "reset Game";
      console.log("2u59275927597597925olssllllllllllllltalalalala");
      paragraph.textContent = "second wins !!";
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
    }
    if (firstScore === secondScore) {
      winningDiv.style.display = "flex";
      btn.style.display = "flex";
      btn.textContent = "reset Game";
      console.log("2u59275927597597925olssllllllllllllltalalalala");
      paragraph.textContent = "i don't know";
      for (let i = 0; i < images.length; i++) {
        images[i].src = "blue.jpg";
      }
    }
  }
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
  window.location = "http://127.0.0.1:5500/game-memore/three.html";
  resetBtn.style.display = "none";
}
resetBtn.addEventListener("click", resetTheGame);
