var last_position_of_x
var last_position_of_y

mouseEvent="empty"

canvas=document.getElementById("myCanvas")

ctx=canvas.getContext("2d")
color="black"
width_of_line=1

canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseup", my_mouse_up)
function my_mouse_up(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave", my_mouse_leave)
function my_mouse_leave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove", my_mouse_move)
function my_mouse_move(e){
    current_position_mouse_x=e.clientX-canvas.offsetLeft
    current_position_mouse_y=e.clientY-canvas.offsetTop

if (mouseEvent=="mouseDown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line

    console.log("last position of x and y coordinate =")
    console.log("x ="+last_position_of_x+"y ="+last_position_of_y)
    ctx.moveTo(last_position_of_x, last_position_of_y)

    console.log("current position of x and y coordinate =")
    console.log("x ="+current_position_mouse_x+"y ="+current_position_mouse_y)
    ctx.lineTo(current_position_mouse_x, current_position_mouse_y)
    ctx.stroke()
}
last_position_of_x=current_position_mouse_x
last_position_of_y=current_position_mouse_y
}