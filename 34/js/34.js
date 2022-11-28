var costprice=prompt("enter the value of costprice");
costprice=parseFloat(costprice);
var sellingprice=prompt("enetr the value of sellingprice");
sellingprice=parseFloat(sellingprice);
var gain;
gain=sellingprice-costprice;
var percentage;
percentage=(gain/costprice*100);
alert(percentage);