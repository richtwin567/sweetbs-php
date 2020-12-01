window.onload = function(){
  var innercont = document.querySelector("#innercont");
  var button = document.querySelector("#genbtn");
  var rows = Array.from(document.getElementsByClassName("shoplist-row"));
  var ingList = ["Cream","Cream Cheese", "Butter", "Sour Cream",
  "Sugar","Egg","Graham Cracker","Cherries","Oreos","Rum Cream","Guava", "Flour",
"Cinnamon","Baking Powder","Salt","Oats","Vanilla"];
  var count = 0;

  console.log("Working...");
  button.addEventListener("click",addElement);

  function addElement(){
    ingList.forEach(sendImg);
    deleteItem();
  }

  function sendImg(pic){
    if(rows.length%2 == 0){
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      div.setAttribute("id",count);
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/global/images/ingredients_images/'+pic+'.png');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.classList.add("checked");
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      count++;
    } else{
      var div = document.createElement("div");
      div.classList.add("even");
      div.classList.add("shoplist-row");
      div.setAttribute("id",count);
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/global/images/ingredients_images/'+pic+'.png');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.classList.add("checked");
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      div.addEventListener("click", function(){

      })
      count++;
    }
  }


  function deleteItem(){
    var items = document.querySelectorAll(".shoplist-row");
    console.log(items);
    items.forEach( element=> {
        element.addEventListener("click",()=>innercont.removeChild(element))
    })
  }




}
