var r=prompt(" enter the r");
r=parseInt(r);
var d=prompt(" enter the d");
d=parseInt(d);
var otherside=(d*d-r*r);
var root_part=Math.sqrt(otherside);
var area=r*root_part;
alert(area);