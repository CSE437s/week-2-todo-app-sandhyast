function addItem(){
    var item = document.getElementById("newItem").value;
    document.getElementById("newItem").value = "";
    console.log(item);

    const node = document.createElement("li");
    const textnode = document.createTextNode(item);
    node.setAttribute("id", item);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

function deleteItem(){
    var item = document.getElementById("deleteText").value;
    document.getElementById("deleteText").value = "";
    console.log(item);

    document.getElementById(item).remove();
}

document.getElementById("add").addEventListener("click", addItem, false);
document.getElementById("delete").addEventListener("click", deleteItem, false);