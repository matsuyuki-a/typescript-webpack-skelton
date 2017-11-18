import "./style.scss";

function component() {
    var element = document.createElement('p');
    element.classList.add('hello');
    element.textContent="Hello, World!";
    return element;
  }

window.addEventListener("load", function() {
    document.getElementById("container").appendChild(component());
});
