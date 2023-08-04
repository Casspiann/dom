var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filter = document.getElementById("filter");
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem); 
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    //console.log(1);
    //Get input value
    var newItem = document.getElementById("item").value;
    var newItem1 = document.getElementById("item1").value;
    var newItem2 = newItem+" "+newItem1;
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(newItem2));
    li.className="list-group-item"
    var editbtn = document.createElement("button");
    editbtn.className = "btn mr-2 btn-outline-dark btn-sm float-right Edit";
    editbtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editbtn);
    var deletebtn = document.createElement('button');
    deletebtn.className = "btn mr-2 btn-danger btn-sm float-right delete";
    deletebtn.appendChild(document.createTextNode("X"));
    li.appendChild(deletebtn);
    
    itemList.appendChild(li);
}
function removeItem(e){
    //console.log(1);
    if(e.target.classList.contains("delete")){
        //console.log(1);
        if(confirm("Are you Sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){
    var text = e.target.value.toLowerCase();
    
    var items = itemList.getElementsByTagName('li');
    //console.log(Array.from(items));
    
    Array.from(items).forEach(function(item){
        itemName = item.firstChild.textContent;
        console.log(itemName.toLowerCase());
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
        //console.log(itemName);

    })
   

    
}