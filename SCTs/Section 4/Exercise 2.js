$("#numbers>a:first-child").click();
$("#decimal").click();

if ($("#total").html() !== "1.") {
	$("#total").text("0");
	return "Your #decimal .click() function does not work properly"
}
$("#total").text("0");

$("#numbers>a:first-child").click();
$("#decimal").click();
$("#decimal").click();

if ($("#total").html() !== "1.") {
	$("#total").text("0");
	return "Do you have a check for multiple decimals?"
}

$("#total").text("0");
return true;