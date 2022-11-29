///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>

import 'cypress-iframe'

// nije importovao iframe, nego sam rucno ukucala, zasto???

describe("Frames", function()
{
    it("First test case", function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Sta su iframes????
        //ako imamo frame ne moze direktno iz Cypressa da se klinkne itd vec mora da se instalira u konzoli
        //u osnovnom projektu projekat1/ npm install -D cypress-iframe

        // moramo da pomerimo fokus na iframe, sa metodom cy.frameLoaded
        //osim sto importujemo moramo da dodamo i ///<reference types="cypress-iframe"/>

        //onda trazimo id tog frejma

        cy.frameLoaded('#courses-iframe')  //id frejma
        cy.iframe().find('a[href*="mentorship"]')










    })})