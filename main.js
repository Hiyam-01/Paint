canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d")

mouseEvent=""
var last_position_x , last_position_x
canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e){
    mouseEvent="mousedown"
    console.log(mouseEvent)
}
canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseup"
    console.log(mouseEvent)
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_pos_x=e.clientX-canvas.offsetLeft
    current_pos_y=e.clientY-canvas.offsetTop
    console.log(mouseEvent)
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.lineWidth=5
        
        ctx.lineTo(current_pos_x,current_pos_y)
        ctx.arc(current_pos_x,current_pos_y,50,0,359)
        ctx.stroke()
        console.log("mousemove+mousedown")
    }
    last_position_x=current_pos_x
    last_position_y=current_pos_y

}
canvas.addEventListener("mouseleave",mouseLeave)
function mouseLeave(e){
    mouseEvent="mouseleave"
    console.log(mouseEvent)
}
