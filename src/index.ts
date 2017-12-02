import "./style/style.scss";

function component() {
    const element = document.createElement('p');
    element.classList.add('hello');
    element.textContent="Hello, World!";
    return element;
  }

window.addEventListener("load", () => {
    document.getElementById("container").appendChild(component());
});
