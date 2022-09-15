let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  crearDiv(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;
    let divUno = document.createElement("div");
    divUno.classList.add("Item");

    //puede estar afuera o adentro
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "🔒";
    botonEditar.classList.add("boton-editar");


    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "🗑";
    botonRemover.classList.add("boton-remover");


    divUno.appendChild(inputItem)
    divUno.appendChild(botonRemover)
    divUno.appendChild(botonEditar)
    
    container.appendChild(divUno)

    botonEditar.addEventListener("click", function (){
        inputItem.disabled =! inputItem.disabled;
        if (inputItem.disabled == false){
            botonEditar.innerHTML = "🔓";
        } else {
            botonEditar.innerHTML = "🔒";
        };
    });

    botonRemover.addEventListener("click", function (){
        divUno.remove();
    });

    
  }
}

function chequearInput () {
    if (input.value != "") {
        new Item(input.value)
    } 
    input.value = null;
}

botonAgregar.addEventListener("click", chequearInput);