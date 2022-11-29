
///<reference types="Cypress"/>

describe('Test if element is displayed or not', function(){

    it('First tast case', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.get('#displayed-text').should('be.visible') //kako znamo da je displayed, zar ne bi prvo treblao click na show pa assert
    cy.get('#hide-textbox').click()
    //cy.get('#displayed-text').should('be.visible') pada test jer je invisible

    cy.get('#displayed-text').should('not.be.visible')
    
    }
    
    )
    }
    )
  