const { When } = require("cucumber");
const MainPage = require("../../pages/main-page.js");

When("I click on contact menu button on the Main page", function () {
    MainPage.contactMenuButton.click();
});