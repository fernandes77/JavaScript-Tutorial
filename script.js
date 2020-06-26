let myAge = 22;
let myName = "Rodrigo Fernandes";
let iAmAlive = true;
let myNameCharacters = [7, 7, 2, 5, 9];
let myInfo = {name: myName, age: myAge, sex: "male"};

let lotsOfDecimal = 1.766584958675746364;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
let myNumber = "256";

let browserType = "chrome";
let os = "winDOWS";

let myCountries = "Brasil, Portugal, Angola";
let myCities = ["Porto", "Lisboa", "Braga"];
let myArray = ["USA", "England", "Spain"];

const myGreeting = function() {
  alert("hello");
}

function displayMessage(msgText, msgType) {
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(../icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(../icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
}

const btn = document.querySelector(".btn");
btn.onclick = function() {
  displayMessage('Your inbox is almost full — delete some mails', 'warning');
  displayMessage('Brian: Hi there, how are you today?','chat');
};