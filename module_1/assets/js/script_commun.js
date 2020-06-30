function showInput(){
    var searchinput = document.getElementById('searchinput');
    var style = getComputedStyle(searchinput);
    var  display = style['display'];
	if( display == 'none'){
		searchinput.style.display = "block";
	  }
	 else{
		searchinput.style.display = "none";
		searchinput.value = "";
	  }
}
