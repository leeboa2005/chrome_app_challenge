const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 저장된 정보 array 를 string으로 변환
}

function deleteTodo(event) {
  const li = event.target.parentElement; // 각각의 값이 담긴 li를 찾을 수 있음 
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) // localstorage에 저장된 ID와 li의 ID가 일치하지 않으면 지우지 않음
  saveToDos() 
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li 생성
  li.id = newTodo.id;
  const span = document.createElement("span"); // span 생성
  span.innerText = newTodo.text; // span 태그에 newTodo 값을 텍스트로 작성
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span); // li 태그 안에 span 태그를 포함 시킴 
  li.appendChild(button);
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  const newTodo = toDoInput.value; // input의 value값을 받아옴 
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 저장된 값을 푸쉬함
  paintToDo(newTodoObj); // 입력 받은 value값을 텍스트로 출력 실행 함수
  saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // forEach함수가 painTODO를 parsedToDos 배열의 요소마다 실행시킴 
}