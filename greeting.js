const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function askForName() {
  form.classList.add(SHOWING_CN); //여기 form에서의 클래스리스트에 showingon을 입력
  form.addEventListener("submit", handleSubmit);
}
function handleSubmit(event) {
  //누군가가 submit을 하면 paintgreeting 실행
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue); //처음 나왔으니까 저장해야지
}
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //form 형식 모든 내용 지움
  greeting.classList.add(SHOWING_CN); //greeting클래스에 이식
  greeting.innerText = `Hello ${text}`; //greeting에 hello +입력내용
  greeting.style.fontSize = "70px";
  greeting.style.color = "white";
}

function init() {
  loadName();
}

init();
