(function() {
	var mobileDetectObject = new MobileDetect(window.navigator.userAgent);
	var resultObject = {
		desktop: "",
		mobile: mobileDetectObject.mobile(),
		phone: mobileDetectObject.phone(),
		tablet: mobileDetectObject.tablet(),
		browserName: mobileDetectObject.userAgent(),
		operatingSystem: mobileDetectObject.os()
	};
	var desktopEl = document.getElementById("el-desktop");
	var mobileEl = document.getElementById("el-mobile");
	var phoneEl = document.getElementById("el-phone");
	var tabletEl = document.getElementById("el-tablet");
	var browserNameEl = document.getElementById("el-browser-name");
	var operatingSystemEl = document.getElementById("el-operating-system");

	console.log("resultobject: ", resultObject);

	desktopEl.textContent = resultObject.desktop;
	mobileEl.textContent = resultObject.mobile;
	phoneEl.textContent = resultObject.phone;
	tabletEl.textContent = resultObject.tablet;
	browserNameEl.textContent = resultObject.browserName;
	operatingSystemEl.textContent = resultObject.operatingSystem;
})();
