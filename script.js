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

    var div = document.createElement("div");
    div.style.width = '11.1%';
    div.style.height = "100px";
    div.style.float = "left";
    div.style.background = "linear-gradient(to bottom, blue, white)";
    div.style.opacity = "0.7";
    var body = document.getElementsByTagName("body");


    document.body.appendChild(div);

    for(i = 1; i < 90; i++) {

        var checkBox = document.createElement("div");
        // give div size properties
        checkBox.style.width = "11.1%";
        checkBox.style.float = "left";
        checkBox.style.paddingBottom = "11.1%";

        if(i % 2 === 0){
            // change backgroundColor to red for even numbered tiles
            checkBox.style.backgroundColor = "DeepPink";
            checkBox.style.opacity = "0.3";
            checkBox.id = i;
            div.appendChild(checkBox);
        }
        else {
            // change backgroundColor to black for odd numbered tiles
            checkBox.style.backgroundColor = "blue";
            checkBox.style.opacity = "0.8";
            checkBox.id = i;
            div.appendChild(checkBox);
        }
    }

};

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
