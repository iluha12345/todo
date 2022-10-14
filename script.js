const tasks = [
    { task: "go work" },
    { task: "take shower" },
    { task: "shopping" },
    { task: "make a dinner" },
];
const add = () => {
    const input = document.getElementById("task-input");

    const ul = document.querySelector(".todo-list-ul");
    const li = document.createElement("li");
        li.classList.add("list-group-item");

        const button = document.createElement("button");
        button.innerText = "Delete";
        button.onclick = () => {
            li.remove();
        };

        li.append(button, input.value);
        ul.append(li);
    
}

const buttonAdd = document.querySelector(".add-task");

buttonAdd.addEventListener("click", add);

const getToDoList = (alltasks) => {
    const ul = document.querySelector(".todo-list-ul");

    const liElements = alltasks.map((item) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const button = document.createElement("button");
        button.innerText = "Delete";
        button.onclick = () => {
            li.remove();
        };

        li.append(button, item.task);
        return li;
    });

    return ul.append(...liElements);
};

getToDoList(tasks);
