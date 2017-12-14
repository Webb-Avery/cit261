var rowCount = 3;
var budgetItems = ["Car", "Food"]
var budget;

function tryCalc()
{
    var item;
    total = 0;

    for (x in budgetItems)
    {
        item = document.getElementById(budgetItems[x]);
        
         if(isNaN(parseInt(item.value)) || item.value == "")
         {
         // the value is not a number or not there 
         }
        else{
            
            total = total + parseInt(item.value);
    }
    }
    
    budget = total;
    document.getElementById("totalBudget").innerHTML = ("$ " + total);
}


function addItem() {
   var itemName = document.getElementById("itemName").value;
    budgetItems.push(itemName);
    var table = document.getElementById("budgetTable");
    var row = table.insertRow(rowCount++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = itemName + ":";
    cell2.innerHTML = "<input type='number' id=" + itemName + " min='0' step='.01' placeholder='' onchange='tryCalc()'>";
    

}

function goOnVacation(){
    tryCalc();
    
    addVacationCol();
    
    var item;
    for (x in budgetItems)
    {
        item = document.getElementById(budgetItems[x]);
        item.setAttribute("readonly", "readonly");
        item.style = "background-color:gray";
    }
    document.getElementById("add").style = "transform: scale(.1)";
    document.getElementById("vaca").style = "transform: scale(.4)";
    stateChange(-1);
    var d = document.getElementById("totalBudget");
    d.style = "background-color:gray";
}

function stateChange(newState) {
    setTimeout(function(){
        if(newState == -1){
            document.getElementById("add").style = "display: none";
            document.getElementById("vaca").style = "display:none";
        }
    }, 3000);
}

function addVacationCol() {
    var table = document.getElementById("budgetTable");
    var i;
    
    for( i= 0; i < table.rows.length;i++) {
        createCell(table.rows[i].insertCell(table.rows[i].cells.length), i);
    }
}
function calcFinal() {

    var item;
    var total = 0;

    for (x in budgetItems)
    {
        x = budgetItems[x] + "final";
        item = document.getElementById(x);
        
        
         if(isNaN(parseInt(item.value)) || item.value == "")
         {
         // the value is not a number or not there 
         }
        else{
            
            total = total + parseInt(item.value);
        }
        
        
    }
    
    if(total < budget){
        document.getElementById("finalCost").style = "background-color:green";
    }
    else if(total == budget){
        document.getElementById("finalCost").style = "background-color:yellow";
    }
    else {
        document.getElementById("finalCost").style = "background-color:red";
    }
    
    document.getElementById("finalCost").innerHTML = ("$ " + total);
    
}
function createCell(cell, text) {

    if (text == 0)
    {
        var b = document.createElement('b');
        txt = document.createTextNode("Final Cost");
        b.appendChild(txt);
        b.setAttribute("style", "text-decoration: underline");
        cell.appendChild(b);
        
    }
    else if (text != rowCount)
    {
        var input = document.createElement('input'); 
        input.type = 'number';
        input.id = budgetItems[text -1] + "final";
        input.setAttribute("onchange", 'calcFinal()');          
        cell.appendChild(input);                   
    }
    else {
        var p = document.createElement('p');
        p.id = 'finalCost';
        cell.appendChild(p);
    }
}