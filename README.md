# EBAY WEB PAGE AUTOMATION

GENERAL OVERVIEW:
* Selenium Webdriver Javascript automation across the Ebay website using the Page-Object-Model design pattern
* Includes parallel test execution using Mocha
* Test scripts are located in the "./test" folder - see ebayTest1.js and ebayTest2.js (ebayTest2 is just a duplication to demonstrate parallel test execution)
* Includes reporting using Mochawesome - please see the ./testreports/testresults.html for test execution results
* Videos of test execution runs are included in the "TestVideos" folder - includes parallel tests for positive and negative test scenarios

TEST FLOW:
1. Verify drop down menu navigation and selection
2. Link text assertions
3. Verify link navigation
4. Verify search functionality

POTENTIAL IMPROVEMENTS:
* Mochawesome video recording / screen captures on test failure/success
* Disable overriding of existing test reports
* Chaining of class methods in the test file
* Add a BDD framework for Gherkin syntax GIVEN-WHEN-THEN

KNOWN ISSUES:
1. Issues with Chrome:
Test execution with chromedriver 102 and 103 may fail due to a bug in Chrome ("WebDriverError: unknown error: unexpected command response (Session info: chrome=103.0.5060.53)"). 

See the below links for this open issue:
https://github.com/SeleniumHQ/selenium/issues/10799
https://bugs.chromium.org/p/chromedriver/issues/detail?id=4121

2. Intermittent Issue:
The following error may intermittently arise when performing test execution

WebDriverError: unknown error: cannot determine loading status
from unknown error: unexpected command response
  (Session info: chrome=103.0.5060.53)
      at Object.throwDecodedError (node_modules/selenium-webdriver/lib/error.js:522:15)
      at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:589:13)
      at Executor.execute (node_modules/selenium-webdriver/lib/http.js:514:28)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at async thenableWebDriverProxy.execute (node_modules/selenium-webdriver/lib/webdriver.js:740:17)
      at async HomePage.clickAllCategoriesLink (model/pages/BasePage.js:23:9)
      at async Context.<anonymous> (test/ebayTest2.js:23:9)