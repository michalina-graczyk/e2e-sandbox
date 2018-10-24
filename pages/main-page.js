const Page = require("./page");

class MainPage extends Page {
    get pageURL() { return "https://www.tivix.com/"; }

    open() {
        super.open(this.pageURL);
    }
}

module.exports = new MainPage();