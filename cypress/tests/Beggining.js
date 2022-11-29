
///<reference types="Cypress"/>

describe('My first test Suite', function(){

  it('My first tast case', function(){
  
  
  
  
  }
  
  )
  }
  )



describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
    })
  })
  describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type')
    })
  })
  describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
    })
  })