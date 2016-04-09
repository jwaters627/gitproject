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
  moving: true,
  verticalDirection: 1,
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
  boxElement.style.transform = 'rotateX(85deg)';
  boxElement.style.transform = 'rotateY(85deg)';
  if (state.boxTop === 100) {
    state.verticalDirection = -1;
  } else {
    
  };
  
  if (state.boxTop === 0) {
    state.verticalDirection = 1;
  }
  
  if (state.moving) {
    state.boxTop = state.boxTop + state.verticalDirection;
    state.rotate = state.rotate + 1;
  } else  {
    //don't change anything
  }
  window.requestAnimationFrame(draw);
};

draw();