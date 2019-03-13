module.exports = {

    elements:{
        locator_search: by.css("input[placeholder='Search']"),
        locator_panelResults: by.className('search-results'),
    },

    goTo: async function (site) {
        await browser.manage().window().maximize();
        await browser.get(site);
    },

    inputComand: async function(comand) {
        return await element(this.elements.locator_search).sendKeys(comand);
    },

    selectComand: async function (parametro) {
        await browser.sleep(10000);
        let panelResultados = element(this.elements.locator_panelResults);
        let options =  panelResultados.all(by.tagName("a"));
        return await options.filter((element, index) => {
            return element.getText().then(text => {
                return text === parametro
            });
        }).first().click(); 
    }
}