const Page = require("./page");

class ContactPage extends Page {
    get pageURL() { return "https://www.tivix.com/contact-us"; }

    get formIframe() { return browser.element('#wufooFormzv5g48f11ol7xh') }

    get firstNameField() { return browser.element("#Field2"); }
    get lastNameField() { return browser.element("#Field3"); }
    get companyField() { return browser.element("#Field12"); }
    get emailField() { return browser.element("#Field5"); }
    get phoneNumberField() { return browser.element("#Field9"); }
    get messageField() { return browser.element("#Field10"); }
    get submitButton() { return browser.element("#saveForm"); }

    get emailFieldError() { return browser.element("#fo1li5 p.error"); }

    open() {
        super.open(this.pageURL);
    }

    fillField(field, value) {
        if (field === "first-name") {
            this.firstNameField.setValue(value);
        } else if (field === "last-name") {
            this.lastNameField.setValue(value);
        } else if (field === "company") {
            this.companyField.setValue(value);
        } else if (field === "email-address") {
            this.emailField.setValue(value);
        } else if (field === "phone-number") {
            this.phoneNumberField.setValue(value);
        } else if (field === "message") {
            this.messageField.setValue(value);
        }
    }
}

module.exports = new ContactPage();