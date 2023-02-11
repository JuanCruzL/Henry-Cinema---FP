function toggleDarkLight(e) {
  e.preventDefault();
  var body = document.getElementById("Switch");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  ///////////////////////////////7
  /*  let moon = document.getElementById("moon");
  console.log("aaa", moon.checked);
  if (moon.checked == true) {
    item.textContent = "🌕";
    moon.checked == false;
  } else {
    item.textContent = "🌑";
  } */
}
export { toggleDarkLight };
