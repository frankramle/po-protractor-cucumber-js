module.exports = {

    findElementFinder: function (locator) {
        return element(locator)
    },

    findElementArrayFinder: function (locator) {
        return all(locator)
    },

    getText: async function (elementFinder) {
        return await elementFinder.getText();      
    },

    click: function (elementFinder) {
        return elementFinder.click();      
    },

    sendKeys: async function (elementFinder, value) {
        await elementFinder.sendKeys(value);      
    },
}