var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get("http://www.google.com", function() {
	driver.findElement(By.name("q"), function(q) {
		q.sendKeys("webdriver", function() {
			driver.findElement(By.name("btnG"), function(btnG) {
				btnG.click(function() {
					driver.getTitle(function(title) {
						assertEquals("webdriver - Google Search", title);
					});
				});
			});
		});
	});
});


driver.quit();