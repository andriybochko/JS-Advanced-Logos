getId = x => document.getElementById(x);
getElem = y => document.querySelector(y);

let win = (function(){
  let winPlayer = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let check = true;

  return {
    checkWin: function(player) {

      for(let i = 0; i < winPlayer.length; i++) {
        let w = winPlayer[i];

        if(getElem('.bigBox').children[w[0]].value == player && getElem('.bigBox').children[w[1]].value == player
        && getElem('.bigBox').children[w[2]].value == player) {
          check = false;
          
          setTimeout( ()=> {
            alert(`${player} win`)
          },300);

          getId('end').style.display = "";
        }
      }
    },

    noWin: function(count) {
      if(count==9 && check==true){
        setTimeout(()=>{
          alert('Nobody Win')
        },500);
        getId('end').style.display = "";
      }
    },

    resetCheck: () => check = true

  }

}());

(function(){
  
  let count = 0;
  let player = "Cat";
  getElem('.cat').style.display = "";
  let images = ['url(images/krestik.svg)','url(images/nolik.svg)'];

  for(let i=0; i<getElem('.bigBox').children.length; i++){
    getElem('.bigBox').children[i].addEventListener('click', function(){
      if(player == 'Cat' && getElem('.bigBox').children[i].style.background == "") {
        getElem('.bigBox').children[i].style.background = images[0];
        getElem('.bigBox').children[i].value = `${player}`;
        console.log(getElem('.bigBox').children[i].value);
        catDog();
        win.checkWin(player);
        player = "Dog";
      }
      else if(player == "Dog" && getElem('.bigBox').children[i].style.background == "") {
        getElem('.bigBox').children[i].style.background = images[1];
        getElem('.bigBox').children[i].value = `${player}`;
        console.log(getElem('.bigBox').children[i].value);
        catDog('','none');
        win.checkWin(player);
        player = "Cat";
      }
      count++;
      win.noWin(count);
    });
  }

  function catDog(cat='none', dog=''){
    getElem('.cat').style.display = cat;
    getElem('.dog').style.display = dog;
  }

  getId('reset').addEventListener('click', function(){
    for(let i=0; i<getElem('.bigBox').children.length; i++){
      getElem('.bigBox').children[i].style.background = "";
      getElem('.bigBox').children[i].value = "";
    }
    player = 'Cat';
    count = 0;
    win.resetCheck();
    catDog('','none');
    getId('end').style.display = "none";
  })

}(win))