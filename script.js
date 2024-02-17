const main = document.getElementById("main-container");
const input = document.getElementById("myInput");
const copyBtn = document.getElementById("copyBtn");
const changeBtn = document.getElementById("changeBtn");

// window onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  changeBtn.addEventListener("click", function () {
    const bgColor = generatedHexColor();
    main.style.backgroundColor = bgColor;
    input.value = bgColor;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
    // toastMsg(`${input.value} Copied!`);

    if (isValidHex(input.value)) {
      toastMsg(`${input.value} copied`);
    } else {
      alert("Invalid color code!");
    }
  });
  input.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      main.style.backgroundColor = color;
    }
  });
}

// GeneratedHexColor function
function generatedHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// create toastMsg
function toastMsg(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.className = "css-Toast-msg toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
  document.body.appendChild(div);
}

// isValidHex function
// /**
//  *
//  * @param {string} color:;
//  * @returns
//  */
function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;
  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
