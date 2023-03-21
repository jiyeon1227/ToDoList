const loginForm = document.querySelector("#login-form"); //querySelector는 ID인지 clas인지 명확히 해야함
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);//로컬에 이름이 있는지 확인
//로컬에 이름이 없을때
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); //form을 hidden이 숨기고있음 -> hidden을 제거해서 login input이 나오게함
    loginForm.addEventListener("submit", onLoginSubmit);// submit을 클릭하면 onLoginSubmit함수 실행
 } else {
     paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);//login form을 다시 hidden
    const username = loginInput.value; //input값을 value로 저장
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username} :)`;
    // greeting.innerText = "Hello " + username; 이렇게도 쓸 수 있음
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden을 제거해서 hello username이 나오게함
}