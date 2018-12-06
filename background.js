const body = document.querySelector("body");

const IMG_NUMBER = 9;

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add("bgImage"); //image파일 소스가 형성 되었으면 css가서 bgImage라는 이름의 클래스를 만들기
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
