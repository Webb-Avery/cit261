function makeBlue() 
{
    document.getElementById("toEdit").style.color = "blue";
}

function backgroundGreen()
{
    document.body.style.background = "green";
}

function centerText()
{
    document.getElementById("toEdit").style.textAlign = "center";
}

function backgroundChoice()
{
    var x = document.getElementById("background").value;
    document.body.style.background = x;
}

function textChoice()
{
    var x = document.getElementById("text").value;
    document.getElementById("toEdit").style.color = x;
}

function buttonChoice()
{
    var x = document.getElementById("buttonColor").value;
    document.getElementById("button1").style.backgroundColor = x;
    document.getElementById("button2").style.backgroundColor = x;
    document.getElementById("button3").style.backgroundColor = x;
    document.getElementById("button4").style.backgroundColor = x;
    document.getElementById("button5").style.backgroundColor = x;
    document.getElementById("button6").style.backgroundColor = x;
    document.getElementById("button7").style.backgroundColor = x;
    document.getElementById("button8").style.backgroundColor = x;
}

function reset()
{
    document.getElementById("toEdit").style.color = "black";
    document.body.style.background = "azure";
    document.getElementById("toEdit").style.textAlign = "left";
}

function behindCurtain()
{
    if (document.getElementById("behindCurtain").style.visibility == "hidden")
    {
        document.getElementById("behindCurtain").style.visibility = "visible";
    }
    else
    {
        document.getElementById("behindCurtain").style.visibility = "hidden";
    }
}
