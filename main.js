// JavaScript Document
function drawVline(l)
{
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	for(i=0;i<10;i++)
	{
		cxt.fillStyle="#000000";
		cxt.fillRect(i*70,0,2,l); 
	}
}

function drawText(text,x,y)
{
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	cxt.font = "bold 12px Arial";	
	cxt.fillStyle = "black";
	cxt.fontweight = "bold";
	cxt.fillText(text, x, y);
}

function drawgrid(type,y)
{
	var c=document.getElementById("myCanvas");
	var cxt=c.getContext("2d");
	if(type == 0)cxt.fillStyle="#BBBBBB";
	else cxt.fillStyle="#000000";
	cxt.fillRect(1,y,630,1); 
	
}

function drawnote(type,value,x,y)
{
	var c = document.getElementById("myCanvas");
	var cxt = c.getContext("2d");
	switch(type)
	{
		case 0:
		{
			cxt.fillStyle="#00D030";
			cxt.fillRect(634-x*70,y-2,64,5); 
			break;
		}
		case 1:
		{	
			cxt.fillStyle="#00D030";
			cxt.fillRect(634-x*70,y-value-2,64,value+5); 
			break;
		}
		case 2:
		{
			cxt.fillStyle="#FF8080";
			cxt.fillRect(658-x*70,y-8,16,16); 
			break;
		}
		case 3:
		{	
			cxt.fillStyle="#FF8080";
			cxt.fillRect(658-x*70,y-value-8,16,value+8); 
			break;
		}
		default:break;
	}
}