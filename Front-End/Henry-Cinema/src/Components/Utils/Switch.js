function toggleDarkLight(e) {
    e.preventDefault()
    var body = document.getElementById("Switch");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
export {toggleDarkLight};