window.addEventListener("scroll", function(){
	var header = document.getElementById("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})
window.addEventListener("scroll", function(){
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
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



