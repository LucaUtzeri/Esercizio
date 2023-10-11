window.onload = () => {
  const form = document.getElementById("myForm");

  form.onsubmit = function (e) {
    e.preventDefault();
    const taskInput = document.getElementById("TaskList");
    const task = taskInput.value;

    const main = document.getElementsByTagName("main")[0];

    const card = document.createElement("div");
    card.className = "card";

    const h4 = document.createElement("h4");
    h4.innerText = task;

    card.onclick = function (x) {
      const clickBox = x.target;
      clickBox.style.textTransform = "capitalize";
    };
    const button = document.createElement("button");
    button.innerText = "Delete Task";

    button.onclick = function (e) {
      const confirmBtn = e.target;
      confirmBtn.parentNode.remove();
    };

    card.appendChild(h4);
    card.appendChild(button);
    main.appendChild(card);

    taskInput.value = "";
  };
};
