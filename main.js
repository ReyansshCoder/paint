var mouseevent="";
var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black";
width=1;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
color=document.getElementById("color"). value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;

mouseevent="mousedown"}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
cpx=e.clientX-canvas.offsetLeft;
cpy=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    console.log("x="+cpx+"y="+cpy)
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(cpx,cpy,radius,0,2*Math.PI)
ctx.stroke();}


}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){mouseevent="mouseup"}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){mouseevent="mouseleave"}

function erase(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)}