var homePage = require('../page-objects/home-po');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised'); 
chai.use(chaiAsPromised);
var expect = chai.expect;

Given('Usuario ingresa a la url {string}', {timeout: 50 * 1000}, async function(url){
    await homePage.goTo(url);
});

When('Ingresa el comando {string} en el search del home', {timeout: 60 * 1000}, async function(comand){
    await homePage.inputComand(comand);
});

When('Busca hasta seleccionar la opcion {string}', {timeout: 90 * 1000}, async function(comandElegido){
    await homePage.selectComand(comandElegido);    
}); 

After({timeout: 50 * 1000}, async function() {
    await browser.driver.quit();
});