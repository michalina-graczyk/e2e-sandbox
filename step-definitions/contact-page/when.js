const { When } = require("cucumber");
const ContactPage = require("../../pages/contact-page.js");

// Contact form appeared to be in an IFrame. WebdriverIO has to focus on it 
// in order to be able to see its elements.
// http://webdriver.io/api/protocol/frame.html

When("Contact form loaded on Contact page", function () {
    ContactPage.formIframe.waitForVisible();
    browser.frame(ContactPage.formIframe.value);
    ContactPage.submitButton.waitForVisible();
});

When(/^I fill "(.*)" field with "(.*)" value on Contact page$/, function (field, value) {
    ContactPage.fillField(field, value);
});

When("I click submit button on Contact page", function () {
    ContactPage.submitButton.click();
});