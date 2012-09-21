if ($("#calculator").find("div:eq(0)").attr("id") !== "total"){
	return "Oops! You shouldn't have changed the first <div>!";
}

if ($("#calculator").find("div:eq(1)").attr("id") !== "operators"){
	return "Oops! You shouldn't have changed the second <div>!";
}

if ($("#calculator").find("div:eq(2)").attr("id") !== "side"){
	return "The id of the third div should be 'side'";
}

if ($("#calculator").find("div:eq(3)").attr("id") !== "numbers"){
	return "Oops! Your fourth div should have the id 'numbers'!";
}

return true