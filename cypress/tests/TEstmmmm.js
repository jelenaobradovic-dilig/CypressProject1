
///<reference types = "Cypress"/>
///<reference types="cypress-iframe"/>

import 'cypress-iframe'



describe('Vezbanje', function()
{it('Test case', function(){

    cy.visit("https://www.google.com/");
    cy.get('.gb_Ue').click()
    cy.frameLoaded('[name="app"]')
    cy.iframe().find('j1ei8c')
    


// cy.get("input[type='checkbox']").eq(2).check()  
// cy.get('#dropdown-class-example').select('option2')


// cy.get('input[name="radioButton"]').each(($el, index, $list)=>{
//         var text = ($el).text()
//          if(text.includes(' Radio2 ')){
//              cy.wrap($el).check() 
//          }else(cy.log('Fail'))
//      }
//      )

//      cy.get('input[name="radioButton"]').each(($el, index, $list)=>{
//         if(index==2){
//            cy.wrap($el).check()
//         }
//     }
//     )

// cy.get('[for="radio2"] > .radioButton').click()

// cy.get('#confirmbtn').click()

// cy.on('window:confirm', (str)=>{expect(str).to.include('Are you sure')})



})})