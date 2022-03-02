var done = document.getElementsByClassName("done");
var list = document.querySelector("ul");
var totalTasks = 0;
var completedBar = document.getElementById("bar");
var checkedTasks = 0;
var porcentage = 0;

// ANIADE TAREA DANDOLE CLICK AL BOTON
function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputTask").value;
  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);
  li.className = "task";
  if (inputValue == "") {
    alert("El campo se encuentra vacio");
  } else {
    document.getElementById("list").appendChild(li);
    document.getElementById("inputTask").value = "";
    masPorcentaje();
  }
  // CREA EL BOTON DE BORRAR
  var doneButton = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  doneButton.appendChild(txt);
  doneButton.className = "done";
  li.appendChild(doneButton);
  // EL BOTON DE BORRAR BORRA
  for (var i = 0; i < done.length; i++) {
    done[i].onclick = function () {
      var div = this.parentElement;
      if (div.classList.value === "task checked") {
        deletedChecked();
      }
      deletedTask();
      div.style.display = "none";
    };
  }
}

//TACHA TAREA REALIZADA
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      console.log(ev.target.classList.value);
      if (ev.target.classList.value == "task checked") {
        checkedTask(); //Resta a la barrita de tareas totales al tachar
      } else {
        desCheckedTask();
      } // suma a la barrita al destachar
    }
  },
  false
);

//TOMA LA FECHA PARA MOSTRARLA
var dt = new Date();
var date = dt.getDate();
var month = dt.getMonth();
var year = dt.getUTCFullYear();

if (month < 10 && date < 10) {
  document.getElementById("date").innerHTML = `0${date}.0${month + 1}.${year}`;
} else if (date < 10) {
  document.getElementById("date").innerHTML = `0${date}.${month + 1}.${year}`;
} else if (month < 10) {
  document.getElementById("date").innerHTML = `${date}.0${month + 1}.${year}`;
} else {
  document.getElementById("date").innerHTML = `${date}.${month + 1}.${year}`;
}

// ESCUCHA EL ENTER

var task = document.getElementById("inputTask");

task.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    //checks whether the pressed key is "Enter"
    addTask();
  }
});

//BARRA DE PROGRESO
// QUEREMOS CONTAR CUANTOS LI HAY EN EL UL
function masPorcentaje() {
  totalTasks = totalTasks + 1;
  completedBar.style.width = console.log(totalTasks);
  porcentage = (checkedTasks / totalTasks) * 100;
  console.log("el porcenage es" + porcentage);
  completedBar.style.width = porcentage + "%";
}
function deletedTask() {
  totalTasks = totalTasks - 1;
  porcentage = (checkedTasks / totalTasks) * 100;
  console.log("el porcenage es" + porcentage);
  completedBar.style.width = porcentage + "%";
}
function desCheckedTask() {
  checkedTasks = checkedTasks - 1;
  porcentage = (checkedTasks / totalTasks) * 100;
  console.log("el porcenage es" + porcentage);
  completedBar.style.width = porcentage + "%";
  console.log(totalTasks);
}
function checkedTask() {
  checkedTasks = checkedTasks + 1;
  console.log("las tareas checkeadas son" + checkedTasks);
  porcentage = (checkedTasks / totalTasks) * 100;
  console.log("el porcenage es" + porcentage);
  completedBar.style.width = porcentage + "%";
  console.log(totalTasks);
}

function deletedChecked() {
  checkedTasks = checkedTasks - 1;
  porcentage = (checkedTasks / totalTasks) * 100;
  console.log("here");
  completedBar.style.width = porcentage + "%";
}
