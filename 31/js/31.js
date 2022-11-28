var distance=prompt("enter distance");
var time=prompt("enter time");
var speed;
distance=parseInt(distance);
time=parseInt(time*60);
var speed=((distance/time)*(18/5));
alert(speed);