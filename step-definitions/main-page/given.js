const { Given } = require("cucumber");
const MainPage = require("../../pages/main-page.js");

Given("I open the Main page", function () {
    MainPage.open();
});

