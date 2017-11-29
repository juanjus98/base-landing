//Wow.js Init
new WOW().init();

//Jquery init
$(function() {

//Utilizar función
var param = 'Hola mundo!';
funcionDemo(param);

//Evento click
$(document).on("click",".click-item",function() {
	console.log('Click item!');
});

//Evento change
$(document).on("change",".change-item",function() {
	console.log('Change item!');
});

//Evento hover
$(document).on("hover",".hover-item",function() {
	console.log('Hover item!');
});

});
//Jquery fin