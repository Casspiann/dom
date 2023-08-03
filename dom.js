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
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent="Hello";
li[1].style.fontWeight="bold";
li[4].className = "list-group-item";
//li[1].style.backgroundColor="green";

