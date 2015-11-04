window.onload = function () {
//making it show on the screen
makeBoxesGradient();

};

var makeBoxes = function() {

  for (var i = 0; i < 90; i++){
    //creating the boxes
    var div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.height = "100px";
    div.style.float = "left"

    if(i % 2 === 0){
      // making even tiles red
      div.style.backgroundColor = "red";
    } else {
      //making odd tiles black
      div.style.backgroundColor = "black";
    }
    document.body.appendChild(div);
  }
};

var makeBoxesRandom = function() {

   for (var i = 0; i < 90; i++){
     //creating the boxes
     var div = document.createElement('div');
     div.style.width = '11.1%';
     div.style.height = "100px";
     div.style.float = "left";
     var ran = '#'+Math.floor(Math.random()*16777216).toString(16);
     div.style.backgroundColor = ran;
     document.body.appendChild(div);
   }
 };

var makeBoxesGradient = function() {
//setting the body background to a simple gradient
  // var body = document.getElementsByTagName('body')[0];
  // body.style.background = 'linear-gradient(to top, black, red)'
//creating div boxes with alternating colors and then
//changing their opacity so gradient shows through
  for (var i = 0; i < 90; i++){
      var div = document.createElement('div');
      div.style.width = "11.1%";
      div.style.height = "100px";
      div.style.float = "left";
      div.style.opacity = "O.5";
//creating alternating color for div
      if(i % 2 === 0){
        // need to work out gradient command in the div not in the background
        div.style.backgroundColor = 'linear-gradient(top, blue 0%, blue 100%');
      }else{
        div.style.backgroundColor = "pink";
        }
      document.body.appendChild(div);
  }
};
