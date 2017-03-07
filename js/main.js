var newItemButtom, listOfItems, thisItem;
newItemButtom = document.querySelector("button");
listOfItems = document.getElementById("item-list");
//thisItem = document.querySelector("li");

function addItem() {
	"use strict";
	var pickItem, listItem;
	pickItem = prompt("What color would you like to add to the list?", "enter a color");
	listItem = document.createElement("li");
	listItem.innerHTML = pickItem;
	listOfItems.appendChild(listItem);
}
newItemButtom.addEventListener("click", addItem, false);

function removeItem(li) {
	"use strict";
	listOfItems.removeChild(li.target);
}
listOfItems.addEventListener("click", removeItem, false);