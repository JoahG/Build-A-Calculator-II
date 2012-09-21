if ($("#operators").find("a:eq(0)").html() !== "+"){
	return "Oops! You shouldn't have changed the first <a>!";
}

if ($("#operators").find("a:eq(1)").html() !== "-"){
	return "Oops! You shouldn't have changed the second <a>!";
}

if ($("#operators").find("a:eq(2)").html() !== "÷"){
	return "The third operator should be ÷";
}

if ($("#operators").find("a:eq(3)").html() !== "×"){
	return "The second operator should be ×";
}

if ($("#operators").find("a:eq(4)").html() !== "="){
	return "Oops! You shouldn't have changed the fifth <a>!";
}