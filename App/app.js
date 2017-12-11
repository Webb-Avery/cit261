function tryCalc()
{
    if (document.getElementById("payment").innerHTML === "Monthly Payment: ")
        return;
    calc();
}
function calc()
{
    var apr = document.getElementById("apr");
    var term = document.getElementById("term");
    var amount = document.getElementById("amount");
    var monthPayment = 0;
    var interest = (apr.value * 0.01) / 12;
    var top = interest * Math.pow(1 + interest, term.value * 12)
    var bottom = Math.pow( 1 + interest, term.value * 12) - 1;
    monthPayment = (amount.value * top) / bottom;

    monthPayment = monthPayment.toFixed(2);

    if(isNaN(parseFloat(apr.value)) || apr.value == "")
    {
        alert("Your APR is not correct. Please try again.");
        apr.focus();
        apr.select();
        return;

    }
    if(isNaN(parseInt(term.value)) || term.value == "")
    {
        alert("Your loan term is not correct. Please try again.");
        term.focus();
        term.select();
        return;

    }
    if(isNaN(parseInt(amount.value)) || amount.value == "")
    {
        alert("Your loan amount is not correct. Please try again.");
        amount.focus();
        amount.select();
        return;

    }
    document.getElementById("payment").innerHTML = ("Monthly Payment: $ " + monthPayment);
}
function reset() 
{
    document.getElementById("apr").value = "";
    document.getElementById("term").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("payment").innerHTML = "";

    document.getElementById("apr").focus();
}
