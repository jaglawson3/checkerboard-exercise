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
      div.id = i;
      document.body.appendChild(div);
    }

    else {
      //making odd tiles black
      div.style.backgroundColor = "black";
      div.id = i;
      document.body.appendChild(div);
    }
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

//   for (var i = 0; i < 90; i++){
//     //creating the boxes
//     var body = document.body.getElementsByClass('body')
//
//     var div = document.createElement('div');
//     div.style.width = '11.1%';
//     div.style.height = "100px";
//     div.style.float = "left";
//     var ran = '#'+Math.floor(Math.random()*16777216).toString(16);
//     div.style.backgroundColor = ran + grad;
//     document.body.appendChild(div);
//
//     var grad = "linear-gradient(to bottom, blue, white)"
//     document.body.appendChild(body);
//   }
// }

 // var makeBoxesGradient = function(){
 //
 //   for (var i = 0; i < 90; i++){
 //     //creating the boxes
 //     var div = document.createElement('div');
 //     div.style.width = '11.1%';
 //     div.style.height = "100px";
 //     div.style.float = "left";
 //     body.style.backgroundImage = 'linear-gradient(to top, #55c6ee, #f90067)'
 //
 // };
