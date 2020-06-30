let item = document.querySelector("#item");
let btn = document.querySelector(".add-item");
let list = document.querySelector(".item-list");

function addListItem() {
  let itemName = item.value;
  item.value = "";

  let listItem = document.createElement("li");
  let itemNameSpan = document.createElement("span");
  let removeButton = document.createElement("button");

  listItem.appendChild(itemNameSpan);
  listItem.appendChild(removeButton);

  itemNameSpan.textContent = itemName;
  removeButton.textContent = "Remove";

  list.appendChild(listItem);
  removeButton.addEventListener("click", function() {
    listItem.remove();
  });
}

btn.addEventListener("click", addListItem);
