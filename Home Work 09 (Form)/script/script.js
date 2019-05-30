getId = x => document.getElementById(x);
getElem = y => document.querySelector(y);

let count=0;
let clothes = document.forms.clothes;
let client = document.forms.client;

let images = ['url(images/form01.png)','url(images/form02.png)','url(images/form03.png)',
'url(images/form04.png)','url(images/form05.png)','url(images/form06.png)','url(images/form07.png)'];

getElem('.carousel').style.background = `${images[count]}`;
getElem('.carousel').style.backgroundSize = 'cover';
getElem('.carousel').style.border = '3px solid white';
getId(`${count+1}`).checked = true;

function left(){
  if (count==0){
    count = images.length;
  }
  count--;
  getElem('.carousel').style.background = `${images[count]}`;
  getElem('.carousel').style.backgroundSize = 'cover';
  getElem('.carousel').style.border = '3px solid white';
  getId(`${count+1}`).checked = true;
};

setInterval(()=>{
  right()
},3000);

function right(){
  count++;
  if(count==images.length){
    count = 0;
  }
  getElem('.carousel').style.background = `${images[count]}`;
  getElem('.carousel').style.backgroundSize = 'cover';
  getElem('.carousel').style.border = '3px solid white';
  getId(`${count+1}`).checked = true;
};

getId('leftArrow').addEventListener('click', function(){
  left();
});

getId('rightArrow').addEventListener('click', function(){
  right();
});

let reg = /^[0-9]{1,3}$/;
let reg0 = /^[a-zA-Z-]+$/;
let reg1 = /^\+38\(\d(3)\)\d(3)-\d(2)-\d(2)$/;
let reg2 = /^[\w\.]+@[a-z0-9]+\.[a-z]{1,4}(\.[a-z]{2,4})?$/;
let reg3 = /^[0-9]{1,3}$/;

for(let i=0; i<clothes.length; i++){
  clothes.elements[i].onblur = function(){
    if(!clothes.elements[i].value){
      clothes.elements[i].nextElementSibling.style.display = "";
      clothes.elements[i].nextElementSibling.innerHTML = "null";
    }
    else if(reg.test(`${clothes.elements[i].value}`) == true){
      clothes.elements[i].nextElementSibling.style.display = 'none';
    }
    else{
      clothes.elements[i].nextElementSibling.style.display = "";
      clothes.elements[i].nextElementSibling.innerHTML = "not a number";
    }
  }

  clothes.elements[i].onfocus = function(){
    clothes.elements[i].nextElementSibling.style.display = 'none';
  }
};

for(let i=0; i<client.length; i++){
  client.elements[i].onblur = function(){
    if(!client.elements[i].value){
      client.elements[i].nextElementSibling.style.display = "";
      client.elements[i].nextElementSibling.innerHTML = "null";
    }
  }

  client.elements[i].onfocus = function(){
    client.elements[i].nextElementSibling.style.display = 'none';
  }
};

client.elements[0].onblur = function(){
  if(reg0.test(`${client.elements[0].value}`) == true){
    client.elements[0].nextElementSibling.style.display = "none";
  }
  else{
    client.elements[0].nextElementSibling.style.display = "";
    client.elements[0].nextElementSibling.innerHTML = "a-z letters";
  }
};

client.elements[1].onblur = function(){
  if(reg1.test(`${client.elements[1].value}`) == true){
    client.elements[1].nextElementSibling.style.display = "none";
  }
  else{
    client.elements[2].nextElementSibling.style.display = "";
    client.elements[2].nextElementSibling.innerHTML = "write correct";
  }
};

$(function(){
  $("#phone").mask("+38(999)999-99-99");
});

client.elements[2].onblur = function(){
  if(reg2.test(`${client.elements[2].value}`) == true){
    client.elements[2].nextElementSibling.style.display = 'none';
  }
  else{
    client.elements[2].nextElementSibling.style.display = "";
    client.elements[2].nextElementSibling.innerHTML = "write correct";
  }
}

client.elements[3].onblur = function(){
  if(reg3.test(`${client.elements[3].value}`) == true){
    client.elements[3].nextElementSibling.style.display = 'none';
  }
  else{
    client.elements[3].nextElementSibling.style.display = "";
    client.elements[3].nextElementSibling.innerHTML = "1-3 numbers";
  }
}

function validate() {
  for(let i=0; i<clothes.length; i++){
      if(!clothes.elements[i].value){
        clothes.elements[i].nextElementSibling.style.display = "";
        clothes.elements[i].nextElementSibling.innerHTML = "null";
      }
      else if(reg.test(`${clothes.elements[i].value}`) == true){
        clothes.elements[i].value = "";
      }
  }
  for(let i=0; i<client.length; i++){
    if(!client.elements[i].value){
      client.elements[i].nextElementSibling.style.display = "";
      client.elements[i].nextElementSibling.innerHTML = "null";
    }
    else if(clothes.elements[i].nextElementSibling.style.display == "none"){
      client.elements[i].value = "";
    }
  }
}