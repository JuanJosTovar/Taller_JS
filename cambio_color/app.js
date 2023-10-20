document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.getElementById("color");
    const target = document.getElementById("header");
    const footer = document.getElementById("footer");
    const tittle = document.getElementById("title");

    colorInput.addEventListener("input", function () {
        const selectedColor = colorInput.value;
        target.style.backgroundColor = selectedColor;
        footer.style.backgroundColor = selectedColor;
        tittle.style.color = selectedColor;
    });
});