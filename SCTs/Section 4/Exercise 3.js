$("#numbers>a:nth-child(9)").click();
$("#sqrt").click();
if ($("#total").text() !== "3") {
	$("#total").text("0");
	return "Your #equals else if for #sqrt does not work properly!"
}

$("#total").text("0");
$("#numbers>a:nth-child(3)").click();
$("#sq").click();
$("#numbers>a:nth-child(3)").click();
$("#equals").click();

if ($("#total").text() !== "27") {
	$("#total").text("0");
	return "Your #equals else if for #sq does not work properly!"
}

$("#total").text("0");
return true;