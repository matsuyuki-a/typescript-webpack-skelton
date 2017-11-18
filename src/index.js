import "./style.css";

function component() {
    var element = document.createElement('div');
    element.classList.add('hello');
    return element;
  }

document.getElementById("container").appendChild(component());
