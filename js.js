let images = document.querySelectorAll("img");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let btn = document.querySelector(".btn");
let winningDiv = document.querySelector(".divOfWinners");
let paragraph = document.querySelector(".paragraphOfWinners");
btn.style.display = "flex";
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

const getIndexOfImg = (array) => {
  btn.style.display = "none";
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      images[i].parentElement.style.transform = " rotateY(180deg)";
      images[i].parentElement.parentElement.style.transform =
        " rotateY(180deg)";

      if (checkIfClicked(images[i]) === "clicked") {
        return;
      }

      if (num === 1) {
        winningDiv.style.display = "flex";
        n++;
        num = 0;
        if (last !== array[i]) {
          setTimeout(() => {
            console.log("sseeee2");
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
          if (checkIfClicked(images[i]) === "clicked") {
            console.log("sleee");
            return;
          }
          if (n % 2 !== 0) {
            scoore1++;
            score1.textContent = scoore1;
          }
          if (n % 2 === 0) {
            scoore2++;
            score2.textContent = scoore2;
          }
          console.log("oooo");
          last.clicked = true;
          images[i].clicked = true;
          console.log(images[i].clicked);
          setTimeout(() => {
            " rotateY(180deg)";
            images[i].src = `${array[i]}.jpg`;
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
});
function checkIfClicked(element) {
  if (element.clicked === true) {
    return "clicked";
  }
  return "unclicked";
}
