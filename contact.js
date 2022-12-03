
function contact() {
	subject = document.getElementById("subject").value;
	message = document.getElementById("message").value;

	const myUrlWithParams = new URL("mailto:rj2358@nyu.edu");

	myUrlWithParams.searchParams.append("subject", subject);
	myUrlWithParams.searchParams.append("message", message);

	let mail = document.createElement("email");
	mail.href = myUrlWithParams.href;
	mail.click();
	console.log(mail.href)
	alert("You should be presented a prompt to send the email. If it doesn't work, try allowing pop-up from this site!");
};


