function runLoop() 
{
    var i;
    for (i = 1; i < 6;  i++)
    {
        
        document.getElementById("toEditLoop").innerHTML += "<br /> Printed " + i + " times";    
    }
}

function runLoop2() 
{
    var i;
    for (i = 1; i < 6;  i++)
    {
        
        document.getElementById("toEditLoop2").innerHTML += "<br /> Printed " + i + " times";    
    }
}
function forLoop()
{
    var grades = {test1: "98", Quiz1: "68", Test2: "89"};
    var x;
    for (x in grades) {
        document.getElementById("toEditFor").innerHTML += grades[x] + "<br />";
    }
}

function whileLoop()
{
    var i = 0; 
    while(i < 5) {
        document.getElementById("toEditWhile").innerHTML += "The current number is " + i + "<br />";
        i++;
    }
}

function doLoop() 
{
    var i = 0; 
    do {
        document.getElementById("toEditDo").innerHTML += "The current number is " + i + "<br />";
        i++;
    }
    while(i < 5);
}


function parameter()
{
    var x = document.getElementById("input1").value;
    var i;
    for(i = 0; i < x; i++){
        document.getElementById("toEditPara").innerHTML += "Printed " + i + " times <br />";
    }
}