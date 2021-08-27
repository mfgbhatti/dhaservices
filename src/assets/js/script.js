let menu = document.getElementById("mobile");
function menuClicked() {
  if (menu.classList.contains("invisible")) menu.classList.remove("invisible");
  else menu.classList.add("invisible");
}
function removeClass() {
  menu.classList.add("invisible");
}
