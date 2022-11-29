///<reference types="Cypress"/>
describe('Navigate Browser controls, validate URL', function(){
    it('test case 1', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
//Validacija URL***

cy.url().should('include', 'rahulshettyacademy.com/Automation');
//neispravno cy.get('#opentab').invoke("attr", 'target').should('include','_blank')


cy.get('#opentab').should('have.attr','target') 

cy.get('#opentab').invoke('removeAttr','target').click();



//cy.get('#opentab').click() tako ode na child tab gde niosta ne mozemo da radimo pokazuje gresku

//cy.get('#opentab').invoke("attr", 'target').should('include','_blank')

//neispravno mora cy.url().should('equal', 'www.rahulshettyacademy.com')
//https://www.rahulshettyacademy.com/

cy.url().should('equal', 'https://www.rahulshettyacademy.com/')


cy.wait(5000); //??? zasto moram da dodajem wait...ne ode back na kraju jer nije ucitana 2. stranica, cime to regulisem??
//VRACANJE NA PRETHODNU STRANICU

cy.go('back')


    })
})