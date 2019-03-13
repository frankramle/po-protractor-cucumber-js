module.exports = {

    elements:{
        locator_titleComand: by.id('ng-test'),
    },

    getTitleComand: async function () {
        var EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(element(by.className('cli-header')), 20000));
        return await element(this.elements.locator_titleComand).getText();
    }
}