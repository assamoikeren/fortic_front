window.addEventListener("scroll", function(){
	var header = document.getElementById("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

function toggle(){
	var header = document.querySelector("header");
	header.classList.toggle("active");
}

window.addEventListener('scroll', () => {
	circleAppear();
	changeBodyColor();
})

function changeBodyColor(){
	var body = document.querySelector("body");
 	if(window.scrollY > 750)
  	{
		body.style.backgroundColor = "#0F78ED";
	}
  	if(window.scrollY > 1500)
  	{
		body.style.backgroundColor = "#388BE8";
	}
}

function circleAppear(){
	var circle = document.getElementById('go-up');
 	if(window.scrollY > screen.height)
  	{
		circle.style.display = "flex";
	}
	else
		{
		circle.style.display = "none";
	}
}

function newDoc(){
 	window.location.assign("file:///C:/Users/I/Documents/projet%20uvci/responsive%20web%20site/ff.html");
}

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
