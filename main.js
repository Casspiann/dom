var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    //console.log(1);
    //Get input value
    var newItem = document.getElementById("item").value;
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(newItem));
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