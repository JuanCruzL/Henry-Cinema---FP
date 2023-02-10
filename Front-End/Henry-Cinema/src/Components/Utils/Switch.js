function toggleDarkLight(e) {
  e.preventDefault();
  var body = document.getElementById("Switch");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var item = document.querySelector(".Switch");
  console.log(item);
  if (body.className == "dark-mode") {
    item.textContent = "🌕";
  } else {
    item.textContent = "🌑";
  }
}
export { toggleDarkLight };
