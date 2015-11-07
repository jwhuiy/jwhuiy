function loadjscssfile(filename, filetype) {
 
    if (filetype == "js") {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    } else if (filetype == "css") {
 
        var fileref = document.createElement('link');
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
 
}
 
loadjscssfile('skins/default/style/index.css', 'css');
window.onload = function() {
	var height = Math.max(document.documentElement.clientHeight,
			document.body.offsetHeight);
	document.getElementById('div_background').style.height = height + 'px';
}