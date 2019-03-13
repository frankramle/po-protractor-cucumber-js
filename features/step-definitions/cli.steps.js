var cliPage = require('../page-objects/cli-po');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised'); 
chai.use(chaiAsPromised);
var expect = chai.expect;

Then('Verifica que el titulo sea igual a la opcion que selecciono', {timeout: 50 * 1000}, async function(){
    let titleComand = await cliPage.getTitleComand();
    expect(titleComand).equals('ng testlink');
});