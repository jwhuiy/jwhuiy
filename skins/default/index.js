window.onload = function() {
	var height = Math.max(document.documentElement.clientHeight,
			document.body.offsetHeight);
	document.getElementById('div_background').style.height = height + 'px';
}