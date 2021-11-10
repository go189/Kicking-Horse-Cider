"use strict";

/*
  Javascript handlers for contact form submit button. 
  Form validity is verified and the user is alerted 
  that their inquiry/feedback has been received.
*/

document.forms[0].onsubmit = function() {
    if (this.checkValidity()) {
		alert("Thanks for your wholesale inquiry or question");
		  
	    //reset form
		document.forms[0].reset();
	}
    return false;
}
   
document.forms[1].onsubmit = function() {
    if (this.checkValidity()) {
		alert("Thanks for your feedback");
		  
		//reset form
		document.forms[1].reset();
	}
	return false;
}