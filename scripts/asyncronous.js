let btn = document.querySelector("button");
let para = document.querySelector(".para");

btn.addEventListener("click", () => {
  alert("You clicked me!");
  let pElem = document.createElement("p");
  pElem.textContent = "This is a newly-added paragraph.";
  para.appendChild(pElem);
});