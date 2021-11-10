"use script";

/*
	Javascript program that builds the shopping cart
	of user selected products. User is able to remove products
	from the cart. 
*/

window.onload = function() {
	
	var cartContainer = document.getElementById("cartContainer");

	//if cart is empty, it doesn't get built
	if(localStorage.length === 0) {
		var emptyCartTag = document.createElement("p");
		var emptyCartTextNode = document.createTextNode("Your cart is currently empty");
		emptyCartTag.appendChild(emptyCartTextNode);
		cartContainer.appendChild(emptyCartTag);
	} 
	//if user has added items to cart, build it
	else {
		buildCart();
	}
};

function buildCart() {
	
	//initialize DOM table build
	var table = document.createElement("table");
	table.setAttribute("id", "cart");
	var cartSubTotal = document.createElement("caption");
	cartSubTotal.setAttribute("id", "cartSubTotal");
	table.appendChild(cartSubTotal);
	cartContainer.insertBefore(table, document.getElementById("cartModButtons"));
		
	/*====================
	BUILD EACH ROW OF CART
	=====================*/
	var productName; 
	var quantity, productSubTotal;
	
	for(var i = 0; i < localStorage.length; i++) {
		
		//get cart item data from local storage
		productName = localStorage.key(i);
		quantity = parseInt(localStorage.getItem(productName));    
			
		//build row
		var cartRow = document.createElement("tr");
		cartRow.setAttribute("id", generateRowId(productName));
		table.appendChild(cartRow);
			
		//build product name cell
		var productNameCell = document.createElement("td");	
		var productNameLabel = document.createElement("p");
		var productNameTextNode = document.createTextNode(productName);
		productNameLabel.appendChild(productNameTextNode);
		productNameCell.appendChild(productNameLabel);
		cartRow.appendChild(productNameCell);
			
		//build product quantity cell
		var quantityCell = document.createElement("td");
		var quantityLabel = document.createElement("p");
		var quantityTextNode = document.createTextNode(quantity + " x 4 x 500mL");
		quantityLabel.appendChild(quantityTextNode);
		quantityCell.appendChild(quantityLabel);
		cartRow.appendChild(quantityCell);
			
		//build product sub-total cell
		var productSubTotalCell = document.createElement("td");
		var productSubTotalLabel = document.createElement("p");
		productSubTotalLabel.setAttribute("class", "productSubTotalLabel");
		var productSubTotalTextNode = document.createTextNode("$" + calculateProductSubTotal(productName, quantity));
		productSubTotalLabel.appendChild(productSubTotalTextNode);
		productSubTotalCell.appendChild(productSubTotalLabel);
		cartRow.appendChild(productSubTotalCell);

		//build remove product button cell
		var removeProductCell = document.createElement("td");
		var removeProductButton = document.createElement("img");
		removeProductButton.setAttribute("class", "removeProductButton");
		removeProductButton.setAttribute("src", "photos/remove.png");
		removeProductButton.onclick = removeProduct;
		removeProductCell.appendChild(removeProductButton);
		cartRow.appendChild(removeProductCell);		
	}
	
	//build checkout button
	var cartActionButtons = document.createElement("div");
	cartActionButtons.setAttribute("id", "cartActionButtons");
	var checkoutButton = document.createElement("input");
	checkoutButton.setAttribute("id", "checkout");
	checkoutButton.setAttribute("type", "button");
	checkoutButton.setAttribute("value", "Checkout");
	cartActionButtons.appendChild(checkoutButton);
	cartContainer.appendChild(cartActionButtons);

	//set cart sub total
	calculateCartSubTotal()
}

//function to generate rowID to later identify
//product if customer wants to remove from cart
function generateRowId(productName) {
	
	var rowID;
	
	switch(productName) {
		case "Basil Plum":
			rowID = "basilPlum";
			break;
		case "Rockin' Raspberry":
			rowID = "rockin'Raspberry";
			break;
		case "Perfect Pear":
			rowID = "perfectPear";
			break;
		case "Pumpkin Spice":
			rowID = "pumpkinSpice";
			break;
		case "Ginger Lime":
			rowID = "gingerLime";
			break;
		default:
			rowID = "cherryPeppercorn";
			break;
	}
	return rowID;
}
 
function calculateProductSubTotal(productName, quantity) {
	
	var price;
	
	if(productName === "Basil Plum" || productName === "Rockin' Raspberry") {
		price = 17.99;
	} else {
		price = 16.99;
	}
	var result = quantity * price;
	return result.toFixed(2);
}

function calculateCartSubTotal() {
	
	var cartSubTotal = 0;
	var subTotalLabels = document.getElementsByClassName("productSubTotalLabel");
	
	//iterate through product subtotals and increment cartSubTotal
	for(var i = 0; i < subTotalLabels.length; i++) {
		var subTotalStr = subTotalLabels[i].textContent; 
		var totalFloat = subTotalStr.replace("$", ""); //remove dollar sign from string
		cartSubTotal += parseFloat(totalFloat);
	}
	document.getElementById("cartSubTotal").textContent = "Cart Sub-Total: $" + cartSubTotal.toFixed(2);
}	

//event handler to remove selected product from the cart and local storage
function removeProduct(e) {
	
	var productToBeRemoved = e.target.parentNode.parentNode;
	
	//remove product from local storage
	switch(productToBeRemoved.id) {
		case "basilPlum":
			localStorage.removeItem("Basil Plum");
			break;
		case "rockin'Raspberry":
			localStorage.removeItem("Rockin' Raspberry");
			break;
		case "perfectPear":
			localStorage.removeItem("Perfect Pear");
			break;
		case "pumpkinSpice":
			localStorage.removeItem("Pumpkin Spice");
			break;
		case "gingerLime":
			localStorage.removeItem("Ginger Lime");
			break;
		default:
			localStorage.removeItem("Cherry Peppercorn");
			break;
	}
	//remove product row from cart
	productToBeRemoved.parentNode.removeChild(productToBeRemoved);
	
	//if cart is now empty, remove buttons and table elements
	if(localStorage.length === 0) {
		var cart = document.getElementById("cart");
		cart.parentNode.removeChild(cart);
		
		var cartActionButtons = document.getElementById("cartActionButtons");
		cartActionButtons.parentNode.removeChild(cartActionButtons);
		
		var emptyCartTag = document.createElement("p");
		var emptyCartTextNode = document.createTextNode("Your cart is currently empty");
		emptyCartTag.appendChild(emptyCartTextNode);
		cartContainer.appendChild(emptyCartTag);
	} 
	//otherwise if items still remain in cart, update cart sub-total
	else {
		//reset cart sub-total
		document.getElementById("cartSubTotal").textContent = "";
	
		//re-calculate cart sub-total
		calculateCartSubTotal();
	}	
}
