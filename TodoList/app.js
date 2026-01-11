let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click" , function() {

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtns = document.createElement("button");
    delBtns.innerText = "delete";
    delBtns.classList.add("delete");

    item.appendChild(delBtns);

    ul.appendChild(item);   
    inp.value = "";

});

ul.addEventListener("click" , function(event) {

    if(event.target.nodeName== "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});