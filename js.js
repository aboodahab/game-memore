let images = document.querySelectorAll("img");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let btn = document.querySelector(".btn");

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
        console.log("sleee");
        return;
      }
      console.log("s");

      if (num === 1) {
        n++;
        num = 0;
        if (last !== array[i]) {
          console.log("ll", last, array[i]);
          setTimeout(() => {
            images[i].src = `${array[i]}.jpg`;
          }, 300);
          setTimeout(() => {
            img.src = "blue.jpg";
            images[i].src = "blue.jpg";
          }, 1200);
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
          images[i].clicked = true;
          console.log(images[i].clicked);
          images[i].src = `${array[i]}.jpg`;
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
      }, 280);
    });
  }
};

btn.addEventListener("click", () => {
  scramble(array);
  getIndexOfImg(array);
  console.log(array);
});
function checkIfClicked(element) {
  if (element.clicked === true) {
    return "clicked";
  }
  return "unclicked";
}
