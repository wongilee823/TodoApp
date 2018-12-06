const toDoForm = document.querySelector(".js-toDoForm"), //사실  GREETING 아님그냥 FORM했어도 됬음
  toDoInput = toDoForm.querySelector("input"), //정의된 input이 아니라 진짜 input 글고 위에서 가져옴
  toDoList = document.querySelector(".js-toDoList"); //html의 js-toDoList 클래스에서 쿼리 가져옴 //queryselector는 html에서 요소를 가져옴

const TODOS_LS = "toDos"; //localstorage 관련 상수

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = " ❌";
  delBtn.style.fontSize = "30px";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text; //text는 handlesubmit에서의 currentvalue니까 즉 입력값
  span.style.fontSize = "30px";
  span.style.color = "white";
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li); //html에서 ul 클래스에 li를 집어넣음
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); //array로 만들어 놓고 ul에 아이디 생성
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //JSON을 통해서 toDos를 String화 후 로컬스토리지에 저장
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = ""; //todo 입력하면 입력창이 사라짐
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
