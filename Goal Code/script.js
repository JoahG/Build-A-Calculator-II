$(document).ready(function(){
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#operators > a, #side > a").not("#equals, #decimal").click(function(){
        if ($(this).text() === "√"){
            operator = "sqrt";
            $("#equals").click();
            return;
        }
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#decimal").click(function(){
        var numOfDecs = 0;
        for (i=0;i<number.length;i++){
            if (number[i] === "."){
            numOfDecs++;
            }
        }
        if (numOfDecs > 0) {
            number = number;
            number = round(number,9);
            totaldiv.text(number);
        } else {
            number += ".";
            number = round(number,9);
            totaldiv.text(number);
        }
        testNumLength(number);
    });
    //Add your last .click() here!
    $("#equals").click(function(){
        if (operator === "+"){
            number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
        } else if (operator === "sqrt") {
            number = Math.sqrt(parseFloat(number,10)).toString(10);
        } else if (operator === "^") {
            number = ((Math.pow(parseFloat(newnumber,10),parseFloat(number,10))).toString(10));
        }
        totaldiv.text(number);
        testNumLength(number);
        number = "";
        newnumber = "";
    });
});​