const btn = document.getElementById('switch-btn');
btn.addEventListener("click", switchTheme);

function switchTheme() {
    document.body.classList.toggle("light-mode");
}