$('header').hover(function() {
	$('header').toggleClass('change');
});

document.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;

    $('#hov').css({'font-size': x/2});

};