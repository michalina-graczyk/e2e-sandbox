const { Then } = require("cucumber");
const { expect } = require("chai");
const ContactPage = require("../../pages/contact-page");

Then("Contact page is loaded", function () {
    expect(ContactPage.currentURL).to.equal(ContactPage.pageURL)
});

Then(/^Validation error appear for "(.*)" field with "(.*)" message on Contact page$/, function (field, message) {
    if (field === "email-address") {
        expect(ContactPage.emailFieldError.getText()).to.contain(message);
    }
});

