if (code['script.js'].indexOf("#side") === -1){
	return "Did you add the #side > a buttons to the .click() handler?"
}

if (code['script.js'].indexOf("#decimal") === -1){
	return "Did you add #decimal to the .not() statement?"
}

$("#numbers>a:first-child").click();
$("#sq").click();

if ($("#total").html() !== "0") {
	$("#total").text("0");
	return "Did you include #sq in your operators .click()?"
}

$("#numbers>a:first-child").click();
$("#sqrt").click();

if ($("#total").html() !== "1") {
	$("#total").text("0");
	return "Did you add an if statement to change behavior for #sqrt?"
}

$("#numbers>a:first-child").click();
$("#decimal").click();

if ($("#total").html() !== "1") {
	$("#total").text("0");
	return "Did you add #decimal to the .not() statement?"
}

$("#total").text("0");
return true