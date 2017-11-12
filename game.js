
var numsquare=6;
var colors = generateRandomColor(numsquare);
var num;
var squares = document.querySelectorAll(".square");
var pickedcolor= pickColor();
var clickedcolor;
var message= document.querySelector("#message");
var colordisplay = document.getElementById("colordisplay");
var h1 = document.querySelector("h1");
var button =document.querySelector("button");
var easy= document.querySelector("#easy");
var hard= document.querySelector("#hard");
colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function()
	{

		clickedcolor=this.style.background;
		console.log(clickedcolor,pickedcolor);
		if(clickedcolor===pickedcolor)
			{
				button.textContent="Play Again ?"
				message.textContent= "Correct";
				changeColors(clickedcolor);
				h1.style.background=clickedcolor;
			}
		else
			{	
				this.style.background= "#232323";

				message.textContent= "Try Again";
			}
	});
}

function changeColors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickColor()
{
var random=Math.floor(Math.random()*colors.length);
return colors[random];
}
function generateRandomColor(num)
{
	var arr = []
	for(i=0;i<num;i++)
	{
arr.push(RandomColor());
	}
	return arr;
}


function RandomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
button.addEventListener("click",function()
{
	colors=generateRandomColor(numsquare);
	pickedcolor=pickColor();
	message.textContent="";
	this.textContent="New Colors"
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
});

easy.addEventListener("click",function() 
{

	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquare=3;
	button.textContent="New Colors";
	colors=generateRandomColor(numsquare);
	pickedcolor=pickColor();
colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.background=colors[i];
	}
	else
		squares[i].style.display="none";
}
	h1.style.background="steelblue";
});

hard.addEventListener("click",function() {

	hard.classList.add("selected");
	easy.classList.remove("selected");
numsquare=6;
	colors=generateRandomColor(numsquare);
	pickedcolor=pickColor();
colordisplay.textContent=pickedcolor;
button.textContent="New Colors";
	for(var i=0;i<squares.length;i++)
{
	
		squares[i].style.background=colors[i];
	
		squares[i].style.display="block";
}
h1.style.background="steelblue";
	
});
