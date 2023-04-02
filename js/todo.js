const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

//투두담을 배열 생성
let toDos = [];

//투두저장
function saveToDos(){
    localStorage.setItem("TODOS_KEY",JSON.stringify(toDos));//string으로 바꿔서 저장
}

//투두삭제
function deleteTodo(event){
    const li = event.target.parentElement;//클릭하면.어떤 버튼이 클릭되었는지.클릭한 버튼의 부모를 가져옴 -> li삭제하기위한 정보
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

//투두리스트 생성
function PaintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo)//버튼을 누르면 deleteTodo함수 호출
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// 투두입력
function handleToDoSubmit(event){
    event.preventDefault();//기본동작인 새로고침을 하지 않도록
    const newTodo = toDoInput.value;
    toDoInput.value = "";// 엔터를 입력하면 input이 비워짐
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);//배열에 담음
    PaintToDo(newTodoObj);//화면에 출력
    saveToDos();//배열을 로컬에 저장
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem("TODOS_KEY");
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);//JSON.parse는 string을 배열로 저장
    toDos = parsedToDos;
    parsedToDos.forEach(PaintToDo);
}