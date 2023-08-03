//console.log(document.getElementById("header-title"));
/*var headertitle = document.querySelector(".title");
console.log(headertitle);
var header = document.getElementById('main-header');
//headertitle.textContent="hello";
header.style.border="solid 3px #000";
headertitle.style.fontWeight = "bold";
headertitle.style.color = "green";
//header.innerHTML="Good By";
/*document.addEventListener("DOMContentLoaded", function() {
    const addItemsTitle = document.querySelector(".title");
    addItemsTitle.style.fontWeight = "bold";
    addItemsTitle.style.color = "green";
  });
  
var items = document.getElementsByClassName("list-group-item");
console.log(items);
//console.log(items[1]);
items[2].textContent = "hello";
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++){
  items[i].style.fontWeight='bold';
}*/
//GET ELEMENT BY TAG NAME
/*var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent="Hello";
li[1].style.fontWeight="bold";
li[4].className = "list-group-item";
//li[1].style.backgroundColor="green";
var li = document.querySelectorAll("li");
li[1].style.backgroundColor="green";
li[2].style.display="none";
li[4].className = "list-group-item";*/
//parentNode
var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";

//parentElement
//console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentElement.parentElement.parentElement);

//childNode
//console.log(itemList.childNodes);
//console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

//FirstChild
//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "hello";

//lastChild
//console.log(itemList.lastChild);
//console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello4";

//nextSibling
//console.log(itemList.previousSibling);

//next Element Sibling
//console.log(itemList.nextElementSibling);

//previous Sibling
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green"; 

var newDiv = document.createElement("div");
newDiv.className = "hello";
newDiv.id = "hello1";
newDiv.setAttribute("title", "HELLo");

var newDIvText = document.createTextNode("HELLo");
newDiv.appendChild(newDIvText);
//console.log(newDiv);

var container = document.querySelector('header .container');
//var li = document.querySelector("li");
var h1 = document.querySelector("header h1");
container.insertBefore(newDiv,h1);
//li.insertBefore(  )

var itemListt = document.querySelector("#items");
var listItem1 = itemList.querySelector("li");
itemListt.insertBefore(newDiv, listItem1);









