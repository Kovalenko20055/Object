var menu = [
	{ name : 'Home', title: 'Start page', src: '/'},
	{ name: 'Downloads', title: 'All downloads', src: '/downloads'},
	{ name: 'Gallery', title: 'Image gallery', src: '/gallery'},
	{ name: 'Contact', title: 'Contact information', src: '/contact'},
	{ name: 'About', title: 'About us', src: '/about'}
];


for (var i = 0; i < menu.length; i++){
	for (key in menu[0]){
		var key
		}
		$('header').append('<div>' + menu[i].name + '</div>')
	
};
$('header').css({
	display: 'flex',
	background: 'gray',
	justifyContent: 'space-around',
	height: '40px',
	alignItems: 'center'
});
$('div').css({
	color: 'white'
});
$('div:first-child').css({
	color: 'red'
})