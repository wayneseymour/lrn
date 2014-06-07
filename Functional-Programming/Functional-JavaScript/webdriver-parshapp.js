function s() {

  setDriver();

  driver.get(gurl);
  driver.findElement(webdriver.By.name("q")).sendKeys("webdriver");
  driver.findElement(webdriver.By.name("btnG")).click();
  driver.getTitle().then(function(title) {
    console.log('\n### title: ', title);

    return driver;
  })
}
