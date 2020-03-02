const basePage = require('../page-objects/base');

module.exports = {

    elements:{
        locator_textBoxSearch: by.css("input[placeholder='Search']"),
        locator_panelResults: by.className('search-results'),
    },

    goTo: async function (site) {
        await browser.manage().window().maximize();
        await browser.get(site);
    },

    inputComand: async function(comand) {

        let elementFinderTextBox = basePage.findElementFinder(this.elements.locator_textBoxSearch);

        await basePage.sendKeys(elementFinderTextBox, comand);
    },

    selectComand: async function (parametro) {
        await browser.sleep(2000);
        let panelResultados = element(this.elements.locator_panelResults);
        let options =  panelResultados.all(by.tagName("a"));
        return await options.filter((element, index) => {
            return element.getText().then(text => {
                return text === parametro
            });
        }).first().click(); 
    }
}