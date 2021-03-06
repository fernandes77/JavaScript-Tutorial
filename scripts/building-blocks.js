const myGreeting = function () {
  alert("hello");
};

function displayMessage(msgText, msgType) {
  const html = document.querySelector("html");

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  html.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.onclick = function () {
    panel.parentNode.removeChild(panel);
  };

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(../icons/warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(../icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}

const btn = document.querySelector(".btn");
btn.onclick = function () {
  displayMessage("Your inbox is almost full — delete some mails", "warning");
  displayMessage("Brian: Hi there, how are you today?", "chat");
};

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const paragraph = document.querySelector(".ael-paragraph");
const square = document.querySelector(".add-event-listener");

function bgChange(event) {
  event.stopPropagation();
  var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  event.target.style.backgroundColor = rndCol;
}

square.addEventListener("click", bgChange);

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector(".form-paragraph");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
};