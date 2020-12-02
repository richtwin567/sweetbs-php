window.onload = function(){
  var innercont = document.querySelector("#innercont");
  //var button = document.querySelector("#genbtn");
  var rows = Array.from(document.getElementsByClassName("shoplist-row"));
//   var strList = ["Cream","Cream Cheese", "Butter", "Sour Cream",
//   "Sugar","Egg","Graham Cracker","Cherries","Oreos","Rum Cream","Guava", "Flour",
// "Cinnamon","Baking Powder","Salt","Oats","Vanilla"];

  var count = 0;
  ingList = []

  async function fetchIngredients(){
      let response = await fetch('https://sweetbs-backend.herokuapp.com/ingredients');
      if (response.ok){
          return response.json();
      // If any unexpected errors happen while fetching, an error is thrown
      }else{
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
      }
  }




  console.log("Working...");
  addElement();

  async function addElement(){
    let ing = await fetchIngredients();
    ing.forEach(function(item){
      ingList.push(item["name"]);
    })
    ingList.forEach(sendImg);
    deleteItem();
  }

  async function sendImg(pic){
    if(count%2 == 0){
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      div.classList.add("swing");
      div.setAttribute("id",count);
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/global/images/ingredients_images/'+pic+'.png');
      img.classList.add("item-img");
      var img2 = document.createElement("img");
      img2.setAttribute('src','../../presentation/global/icons/check_circle_outline-black-48dp.svg');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.setAttribute("id","checked");
      div2.classList.add("checked");
      div2.classList.add("hidden");
      div2.appendChild(img2);
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      count++;
    } else{
      var div = document.createElement("div");
      div.classList.add("shoplist-row");
      div.setAttribute("id",count);
      div.classList.add("even");
      var img = document.createElement("img");
      img.setAttribute('src','../../presentation/global/images/ingredients_images/'+pic+'.png');
      img.classList.add("item-img");
      var img2 = document.createElement("img");
      img2.setAttribute('src','../../presentation/global/icons/check_circle_outline-black-48dp.svg');
      var p = document.createElement("p");
      p.innerHTML = pic;
      var div2 = document.createElement("div");
      div2.setAttribute("id","checked");
      div2.classList.add("checked");
      div2.classList.add("hidden");
      div2.appendChild(img2);
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(div2);
      innercont.appendChild(div);
      count++;
    }
  }

  function deleteItem(){
    var items = document.querySelectorAll(".shoplist-row");
    items.forEach( element=> {
        element.addEventListener("click",function(){
        element.classList.add("removed-item");
        window.setTimeout(function(){
          innercont.removeChild(element);
          element.classList.add("hidden");
        },690);
      })
    })
  }




}
