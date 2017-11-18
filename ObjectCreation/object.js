


function train(){
    var train = {engineName:"Thomas",
    trainNumber:1,
    cars:5
}

    alert(train.engineName);
}

function newTrain() {
    this.engineName = document.getElementById("engineName").value;
    this.trainNumber = document.getElementById("trainNumber").value;
    this.cars = document.getElementById("cars").value;
    
    document.getElementById("toEditNew").innerHTML = "Engine Name: " + engineName + "<br /><br />" + "Train Number: " + trainNumber + "<br /><br />" + "Cars: " + cars + "<br /><br />";
    
}
