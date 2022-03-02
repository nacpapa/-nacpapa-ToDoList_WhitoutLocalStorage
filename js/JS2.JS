var done = document.getElementsByClassName("done");
// ANIADE TAREA DANDOLE CLICK AL BOTON
function addTask (){
    var li = document.createElement("li");
    var inputValue = document.getElementById('inputTask').value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    
    if(inputValue == ''){
        alert('El campo se encuentra vacio');
    } else {
        document.getElementById("list").appendChild(li);
        document.getElementById('inputTask').value = '';
    };
// CREA EL BOTON DE BORRAR
    var doneButton = document.createElement('button');
    var txt = document.createTextNode("\u00D7");
    doneButton.appendChild(txt)
    doneButton.className = "done"
    li.appendChild(doneButton)
// EL BOTON DE BORRAR BORRA
    for (var i = 0; i < done.length; i++) {
        done[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        };
    };
};

//TACHA TAREA REALIZADA Y ANIADE UN TICK DE REALIZADO CUANDO SE TERMINA LA TAREA 

var list  = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

