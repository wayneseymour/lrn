var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get("http://www.google.com");
driver.findElement(webdriver.By.name("q")).sendKeys("webdriver");
driver.findElement(webdriver.By.name("btnG")).click();
driver.getTitle().then(function(title) {
	// assertEquals("webdriver - Google Search", title);

	driver.quit();
});


