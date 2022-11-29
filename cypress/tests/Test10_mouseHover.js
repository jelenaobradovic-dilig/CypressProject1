///<reference types="Cypress"/>

describe("Mouse hover", function()
{
    it("First test case", function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//posto imamo sakrivene elemente, bitno je naci bas selektor za njih
//a ne za dugme Mouse Hover, i onda radimo INVOKE da bi radili sa invisible elementima

//cy.get('.mouse-hover-content').invoke('show') //zar ovde ne dobijemo niz od 2 elementa??? a ne moramo kroz niz
//cy.contains('Top').click()
//cy.url().should('contains', 'top') //ili includes??

//druga varijanta da ne koristimo invoke je:
cy.contains('Top').click({force:true}) //kako zna koji invisible element da gleda ako nismo prvo isli na get 
cy.url().should('contains', 'top')


    })})