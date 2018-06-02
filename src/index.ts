import "./style/style.scss";

function component() {
    const element = document.createElement('p');
    element.classList.add('hello');
    element.textContent = "Hello, World!";
    return element;
}

window.addEventListener("load", () => {
    const container = document.getElementById("container");
    if (container) {
        container.appendChild(component());
    }
});
