class Page {
    get contactMenuButton() { return browser.element('.nav-contact'); }
    get currentURL() { return browser.getUrl(); }

    open(page) {
        browser.setViewportSize({
            width: 1024,
            height: 848
        });
        browser.url(page);
    }
}

module.exports = Page;