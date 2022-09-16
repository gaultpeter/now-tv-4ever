console.log("Now TV 4ever running...");

updateCookies();

function isUserSignedIn() {
	if (getCookie("skyUMV")) {
		return true;
	} else {
		return false;
	}
}

function updateCookies() {
	if (isUserSignedIn()) {
		setCookies(getCookies());
	}
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie =
		cname + "=" + cvalue + ";domain=.nowtv.com;path=/;" + expires;
}

function getCookies() {
	var pairs = document.cookie.split(";");
	var cookies = {};
	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].split("=");
		cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
	}
	return cookies;
}

function setCookies(cookies) {
	for (let [key, value] of Object.entries(cookies)) {
		setCookie(key, value, 2);
	}
}
