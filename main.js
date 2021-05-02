document.getElementById("input_colour").defaultValue = "black";
document.getElementById("input_radius").defaultValue = "40";
document.getElementById("input_width").defaultValue = "1";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
colour = "black";
width = 1;
radius = 40;
mouse_event = "empty";
width = screen.width;
height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 350;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour = document.getElementById("input_colour").value;
    radius = document.getElementById("input_radius").value;
    width = document.getElementById("input_width").value;
    mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_mouse_x = e.clientX - canvas.offsetLeft;
    current_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouseDown") {
        console.log("X = " + current_mouse_x + ", Y = " + current_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}
function clear_it() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {    
    colour = document.getElementById("input_colour").value;
    radius = document.getElementById("input_radius").value;
    width = document.getElementById("input_width").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_touch_y = e.touches[0].clientY - canvas.offsetTop;
    console.log("X = " + current_touch_x + ", Y = " + current_touch_y);
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width;
    ctx.arc(current_touch_x, current_touch_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}