/*$('header').hover(function() {
	$('header').toggleClass('change');
});*/

/*document.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;

    $('#hov').css({'font-size': x/2});

};*/

// FLOATING DIV ON ABOUT PAGE
var state = {
  boxTop: 0,
  boxLeft: 0,
  moving: true,
  verticalDirection: 1,
  horizontalDirection: 1,
  rotate: 0,
};

// .onclick
var sceneElement = document.getElementById('scene');
var boxElement = document.getElementById('box');

var handleClick = function () {
  if (state.moving) {
    state.moving = false;
  } else {
    state.moving = true;
  }
};

sceneElement.onclick = handleClick; 

function draw () {
  //do some animation here...
  boxElement.style.top = state.boxTop + 'px';
  boxElement.style.left = state.boxLeft + 'px';
  boxElement.style.transform = 'rotateX(85deg)';
  boxElement.style.transform = 'rotateY(' + state.rotate + 'deg)';
  if (state.boxTop === 100) {
    state.verticalDirection = -1;
  } else {
    
  };
  
  if (state.boxTop === 0) {
    state.verticalDirection = 1;
  }

  if (state.boxLeft === ((window.innerWidth * .5) - 100)){
    state.horizontalDirection = -2;

  }
  else if (state.boxLeft === 0) {
    state.horizontalDirection = 2;
  };
  
  if (state.moving) {
    state.boxTop = state.boxTop + state.verticalDirection;
    state.boxLeft = state.boxLeft + state.horizontalDirection;
    state.rotate = state.rotate + 1;
  } else  {
    //don't change anything
  }
  window.requestAnimationFrame(draw);
};

draw();