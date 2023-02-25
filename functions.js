var itemID = 2;
function addItem() { // RIGHT NOW --- ADD IDS TO EVERY ELEMENT TO CREATE MY OWN INDICES
    // [ ✔️ ] GET DELETE AND COLOR TO ADD ON
    // [ ✔️ ] CONNECT INDICES!!!
    // [ ✔️ ] GET THE DELETE AND CHANGE COLOR TO WORK
    // [  ] EXTRA - MAKE DATE STRIKETHROUGH AS WELL ON CHECKED!!!
    var task = document.getElementById("taskInput").value;
    var taskUl = document.getElementById("taskList");
    var taskLi = document.createElement("li");
    taskLi.dataset.index = itemID;
    var taskCheck = document.createElement("input");
    taskCheck.type = "checkbox"
    taskCheck.id = "taskCheck";
    taskCheck.value = task;
    taskCheck.className = "taskCheck";
    taskCheck.checked = false;
    var label = document.createElement("label");
    label.setAttribute("for","taskCheck");
    taskLi.appendChild(taskCheck);
    var taskItem = document.createTextNode(task);
    label.innerHTML = (task);
    taskLi.appendChild(document.createTextNode(" "));
    taskLi.appendChild(label);
    taskUl.appendChild(taskLi);
  

    var date = document.getElementById("dateInput").value; // SET DEFAULT TO TODAY'S DATE
    var dateUl = document.getElementById("dateList");
    var dateNode = document.createElement('li');
    dateNode.dataset.index = itemID;
    dateNode.appendChild(document.createTextNode(date));
    dateUl.appendChild(dateNode);

    var del = document.getElementById("deleteButton");
    var extrasUl = document.getElementById("extrasList");
    var extrasLi = document.createElement('li');
    extrasLi.dataset.index = itemID;
    extrasLi.id = "extrasItem";
    extrasLi.className = "extraItem";
    var btn = document.createElement('deleteButton');
    btn.className = "button deleteButton";
    btn.id = "extrasItem";
    btn.style.margin = "0px 0 0 0";
    btn.style.marginRight = "5.5px";
    btn.innerHTML = "X";
    btn.setAttribute("onclick", "deleteItem(" + itemID + ");");
    extrasLi.appendChild(btn);

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var col = document.getElementById("inputColor");
    var colBtn = document.createElement('input');
    colBtn.type = 'color';
    colBtn.className = "inputColor";
    colBtn.value = "#" + randomColor;
    colBtn.dataset.index = itemID;
    colBtn.setAttribute("onclick", "changeColor(" + itemID + ");");
    extrasLi.appendChild(colBtn);
    extrasUl.appendChild(extrasLi);

    itemID = itemID + 1;

  }
function deleteItem(itemIndex) { // See what is checked and delete from both lists
    console.log("Checkpoint 1");
    var taskUl = document.getElementById("taskList");
    var dateUl = document.getElementById("dateList");
    var extrasUl = document.getElementById("extrasList");
    console.log("Checkpoint 2");
    var items = document.querySelectorAll("[data-index='" + itemIndex + "']");
    console.log("Checkpoint 3");
    for (var value of items.values()) {
      console.log(value);
    }
    taskUl.removeChild(items[0]);
    dateUl.removeChild(items[1]);
    extrasUl.removeChild(items[2]);
    console.log("Checkpoint DONE");
}
function changeColor(itemIndex) { // change color AFTER wheel closed, not before
  var items = document.querySelectorAll("[data-index='" + itemIndex + "']");
  var chosen = items[3];
  var color = chosen.value;
  var taskUl = document.getElementById("taskList");
  var dateUl = document.getElementById("dateList");
  chosen.addEventListener('change', function (event) {
      const inputVal = event.target.value;
      const red = parseInt(inputVal.substring(1, 3), 16);
      const green = parseInt(inputVal.substring(3, 5), 16);
      const blue = parseInt(inputVal.substring(5, 7), 16);
      const rgb = [red, green, blue];
      console.log(rgb);
      items[0].style.backgroundColor = inputVal;
      items[1].style.backgroundColor = inputVal;
      if (red < 128 || blue < 128 || green < 128) {
          items[0].style.color = "white";
          items[1].style.color = "white";
      }
      else {
        items[0].style.color = "#283618";
        items[1].style.color = "#283618";
      }
  });
}
