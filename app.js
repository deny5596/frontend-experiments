(function () {
	// var mobileDetectObject = new MobileDetect(window.navigator.userAgent);

	// Detect.js
	// var result = detect.parse(window.navigator.userAgent);
	// console.log(result);

	// Bowser.js 
	var result = bowser.getParser(window.navigator.userAgent).parsedResult;
	console.log(result);

	var resultObject = {
		// desktop: "",
		// mobile: mobileDetectObject.mobile(),
		// phone: mobileDetectObject.phone(),
		// tablet: mobileDetectObject.tablet(),
		// browserName: mobileDetectObject.userAgent(),
		// operatingSystem: mobileDetectObject.os(),

		// Detect.js
		// device: result.device.type,
		// deviceVendor: result.device.manufacturer,
		// deviceModel: result.device.name,
		// browserName: result.browser.family,
		// operatingSystem: result.os.family,

		// Bowser.js 
		device: result.platform.type,
		deviceVendor: result.platform.vendor,
		deviceModel: result.platform.model,
		browserName: result.browser.name,
		operatingSystem: result.os.name,

	};
	// var desktopEl = document.getElementById("el-desktop");
	// var mobileEl = document.getElementById("el-mobile");
	// var phoneEl = document.getElementById("el-phone");
	// var tabletEl = document.getElementById("el-tablet");
	var deviceEl = document.getElementById("el-device");
	var deviceVendorEl = document.getElementById("el-device-vendor");
	var deviceModelEl = document.getElementById("el-device-model");

	var browserNameEl = document.getElementById("el-browser-name");
	var operatingSystemEl = document.getElementById("el-operating-system");

	console.log("resultobject: ", resultObject);

	// desktopEl.textContent = resultObject.desktop;
	// mobileEl.textContent = resultObject.mobile;
	// phoneEl.textContent = resultObject.phone;
	// tabletEl.textContent = resultObject.tablet;
	deviceEl.textContent = resultObject.device;
	deviceVendorEl.textContent = resultObject.deviceVendor;
	deviceModelEl.textContent = resultObject.deviceModel;

	browserNameEl.textContent = resultObject.browserName;
	operatingSystemEl.textContent = resultObject.operatingSystem;
})();
