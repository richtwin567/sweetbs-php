window.onload = function(){
  var innercont = document.querySelector("#innercont");
  var button = document.querySelector("#genbtn");

  button.addEventListener("click",addElement);

  function addElement(){
    var rows = document.getElementsByClassName("shoplist-row");
    if(rows.length%2 == 0){
      console.log(rows.length);
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/images/eggs.jpg');
      var p = document.createElement("p");
      p.innerHTML = "ITEM";
      var p2 = document.createElement("p");
      p2.innerHTML = "#";
      var div2 = document.createElement("div");
      div2.classList.add("checked")
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(div2);
      innercont.appendChild(div);
    } else{
      console.log(rows.length);
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      div.classList.add("even");
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/images/eggs.jpg');
      var p = document.createElement("p");
      p.innerHTML = "ITEM";
      var p2 = document.createElement("p");
      p2.innerHTML = "#";
      var div2 = document.createElement("div");
      div2.classList.add("checked")
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(div2);
      innercont.appendChild(div);
    }

  }
}
