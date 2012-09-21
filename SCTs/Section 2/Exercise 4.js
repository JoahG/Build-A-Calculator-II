if ($("#side").find("a:eq(0)").attr('id') !== "sq" || $("#side").find("a:eq(0)").html() !== '^'){
	return "Oops! Your first <a> in #side should be #sq with .html() '^'!";
}

if ($("#side").find("a:eq(1)").attr('id') !== "sqrt" || $("#side").find("a:eq(1)").html() !== '√'){
	return "Oops! Your first <a> in #side should be #sqrt with .html() '√'!";
}

if ($("#side").find("a:eq(2)").attr('id') !== "dec" || $("#side").find("a:eq(2)").html() !== '.'){
	return "Oops! Your first <a> in #side should be #dec with .html() '.'!";
}

return true