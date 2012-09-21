if ($("#operators").find("a:eq(4)").html() === "=" || $("#operators").find("a:eq(4)").attr('id') === "equals"){
	return "Oops! Your #equals <a> is in #operators! It should be in #side!";
}

if ($("#side").find("a:eq(0)").html() !== "=" || $("#side").find("a:eq(0)").attr('id') !== "equals"){
	return "Your <a> in #side should be #equals, and should have .html() '='!";
}

return true