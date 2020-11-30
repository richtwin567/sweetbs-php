window.onload = function(){
  var innercont = document.querySelector("#innercont");
  var button = document.querySelector("#genbtn");
    var rows = document.getElementsByClassName("shoplist-row");
  var ingList = ["Cream","Cream Cheese", "Butter", "Sour Cream",
  "Sugar","Egg","Graham Cracker","Cherries","Oreos","Rum Cream","Guava", "Flour",
"Cinnamon","Baking Powder","Salt","Oats","Vanilla"];

  button.addEventListener("click",addElement);

  function addElement(){
    ingList.forEach(sendImg);
  }

  function sendImg(pic){
    if(rows.length%2 == 0){
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/images/'+pic+'.png');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.classList.add("checked");
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      console.log(img+".jpg");
    } else{
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      div.classList.add("even");
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/images/'+pic+'.png');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.classList.add("checked");
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      console.log(pic+".jpg");
    }
  }

}
