var turnLeft = document.getElementById("left");
var turnRight = document.getElementById("right");
var ctx = document.getElementById("canvas").getContext("2d");
let playAgain = document.getElementById("playAgain");

ctx.lineWidth = 4;
ctx.strokeRect(0, 0, 450, 350);

var x = 0;
var y = 350/2;
var dir = 1;
var timer = setInterval(time,40);
document.getElementById("stopgo").onclick = function()
{
    
    if(this.value == "STOP")
        {
            this.value="CONTINUE";
            clearInterval(timer);
        }
    else if(this.value =="CONTINUE")
        {
            this.value ="STOP";
            timer = setInterval(time,40);   
        }
}
function left()
{
    dir++;
}
function right()
{
    dir--;
}
var xy =[];
for(var i = 0; i<350; i++)
    {
        xy[i] = [];
        for(var j =0; j<450; j++)
            {
                xy[i][j] = false;
            }
    }

let toggleID = (id) => {
    let x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function time()
{
     turnLeft.onclick = left;
     turnRight.onclick = right;
      if(dir == 1 || dir == 5) {
        dir = 1;
        x++;
        ctx.lineTo(x, y);
       
        ctx.stroke();
      }
      else if(dir == 2) {
        y--;
        ctx.lineTo(x, y);
       
        ctx.stroke();
        
      }
      else if(dir == 3) {
        x--;
        ctx.lineTo(x, y);
       
        ctx.stroke();
      }
      else if(dir == 4 || dir == 0) {
        dir = 4;
        y++;
        ctx.lineTo(x, y);
       
        ctx.stroke();
      }
     if(xy[x][y] == true)
        {
         clearInterval(timer);
         toggleID("still_playing");
         toggleID("toggle_this");
        
        }
    if(x >= 450 || x<=0)
        {
        clearInterval(timer);
        toggleID("still_playing");
        toggleID("toggle_this");
        }
    if(y >= 350 || y<=0)
        {
        clearInterval(timer);
        toggleID("still_playing");
        toggleID("toggle_this");
        }
    
    
    xy[x][y] = true;
}



