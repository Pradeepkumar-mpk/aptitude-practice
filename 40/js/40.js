var a=prompt("enter the value of a");
a=parseInt(a);
var b=prompt("enter the value of b");
b=parseInt(b);
var c=prompt("enter the value of c");
c=parseInt(c);
var s=1/2*(a+b+c);
var area=s*(s-a)*(s-b)*(s-c);
var root_part=Math.sqrt(area);
alert(root_part);