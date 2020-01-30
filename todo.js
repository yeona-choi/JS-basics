const todoForm = document.querySelector(".js-todoForm");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        // li에 없는 id인 toDos를 체크
        console.log(toDo.id, parseInt(li.id));

        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // localStorage 는 string 형태로 저장하기 때문에 
    //localStorage.setItem(TODOS_LS, toDos);  -> object를 string으로 변환
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== null) {
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtnl = document.createElement("button");
    delBtnl.innerText = "❌";
    delBtnl.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtnl);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function toDosSubmit(event) {
    event.preventDefault();
    const currentvalue = toDoInput.value;
    paintToDo(currentvalue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    todoForm.addEventListener("submit", toDosSubmit);
}

init();