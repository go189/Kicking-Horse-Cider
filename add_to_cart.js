"use script";

/*
	Javascript program to add selected products to local
	storage when the user clicks the add to cart button.
	Another script is run on the cart page to pull the data
	from local storage.
*/

var addToCartButtons = document.getElementsByClassName("addToCart"); 

for(var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].onclick = populateStorage;
}		  
	
function populateStorage(e) {
	
	var product;
	var quantity;
	
	switch(e.target.id) {
		case "product1AddToCart":
			product = "Basil Plum";
			quantity = parseInt(document.getElementById("product1Quantity").value);
			break;
		case "product2AddToCart":
			product = "Rockin' Raspberry";
			quantity = parseInt(document.getElementById("product2Quantity").value);
			break;
		case "product3AddToCart":
			product = "Perfect Pear";
			quantity = parseInt(document.getElementById("product3Quantity").value);
			break;
		case "product4AddToCart":
			product = "Pumpkin Spice";
			quantity = parseInt(document.getElementById("product4Quantity").value);
			break;
		case "product5AddToCart":
			product = "Ginger Lime";
			quantity = parseInt(document.getElementById("product5Quantity").value);
			break;
		case "product6AddToCart":
		product = "Cherry Peppercorn";
			quantity = parseInt(document.getElementById("product6Quantity").value);
			break;
	}
	
	//if storage does not contain currently selected product, add to storage
	if(!localStorage.getItem(product)) {
		localStorage.setItem(product, quantity);
	} 
	//if storage already contains selected product, 
	//add old quantity to new quantity and add to storage
	else {
		var oldQuantity = parseInt(localStorage.getItem(product));
		quantity += oldQuantity;
		
		localStorage.setItem(product, quantity);
	}
	window.alert("You have added " + product + " to the cart.\nThank You.");
}
