
function contact() {
	subject = document.getElementById("subject").value;
	message = document.getElementById("message").value;

	const myUrlWithParams = new URL("mailto:rj2358@nyu.edu");

	myUrlWithParams.searchParams.append("subject", subject);
	myUrlWithParams.searchParams.append("message", message);
	console.log(myUrlWithParams.href)
	window.location.href = myUrlWithParams.href
	
	alert("You should be presented a prompt to send the email. If it doesn't work, try allowing pop-up from this site!");
};


