var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google Search', function() {
  var driver;

  test.before(function() {
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
  });

  test.it('should append query to title', function() {
    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
    driver.findElement(webdriver.By.name('btnG')).click();
    driver.wait(function() {
      return driver.getTitle().then(function(title) {
        return 'webdriver - Google Search' === title;
      });
    }, 1000);
  });

  test.after(function() { driver.quit(); });
});