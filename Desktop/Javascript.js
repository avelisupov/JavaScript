function getReceipt() {
	//set variables and start select function
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	// gets the values of selected size
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	// gets the data for the table
	document.getElementById("finalsize").innerHTML = selectedSize;
	document.getElementById("sizeprice").innerHTML = "$"+sizeTotal+".00";
	//console log and start next function
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	// gets the prices 
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	document.getElementById("selectmeat").innerHTML = selectedMeat;
	document.getElementById("meatprice").innerHTML = "+$"+meatTotal+".00";
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getCheese(runningTotal,text1);
};
function getCheese(runningTotal,text1) { //Function Array
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			var selectedCheese = cheeseArray[c].value;
			console.log("selected cheese item: ("+cheeseArray[c].value+")");
			text1 = text1+selectedCheese+"<br>";
		}
	}
	// Array Price selection
	if (selectedCheese === "No Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Regular Cheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	//Total price
	runningTotal = (runningTotal + cheeseTotal); 
	document.getElementById("selectCheese").innerHTML = selectedCheese;
	document.getElementById("cheesePrice").innerHTML = "+$"+cheeseTotal+".00";
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1);
};
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var r = 0; r < crustArray.length; r++) {
		if (crustArray[r].checked) {
			var selectedCrust = crustArray[r].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	document.getElementById("selectCrust").innerHTML = selectedCrust;
	document.getElementById("crustPrice").innerHTML = "+$"+crustTotal+".00";
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("Crust text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1);
};
function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	if (selectedSauce === "Marinara Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "White Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "Barbeque Sauce") {
		sauceTotal = 0;
	} else if (selectedSauce === "No Sauce") {
		sauceTotal = 0;
	}
	runningTotal = (runningTotal + sauceTotal);
	document.getElementById("selectSauce").innerHTML = selectedSauce;
	document.getElementById("saucePrice").innerHTML = "+$"+sauceTotal+".00";
	console.log("Sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getVeggies(runningTotal,text1);
};
function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggieArray = document.getElementsByClassName ("veggie");
	for (var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggies.push(veggieArray[v].value);
			console.log("selected veggie item: ("+veggieArray[v].value+")");
			text1 = text1+veggieArray[v].value+"<br>";
		}
	}
	var veggieCount = selectedVeggies.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("selectVeggies").innerHTML = selectedVeggies;
	document.getElementById("veggiePrice").innerHTML = "+$"+veggieTotal+".00"
	// Final price
	document.getElementById("FinalPrice").innerHTML = "<h3><strong>$"+runningTotal+".00"+"</strong></h3>";

};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	