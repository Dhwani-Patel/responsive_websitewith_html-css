var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");

var body=document.getElementById("body_gradient");
function setGreadient()
{
		body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
}