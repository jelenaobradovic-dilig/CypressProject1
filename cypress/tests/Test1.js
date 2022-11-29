///<reference types="Cypress"/>

const { should } = require("chai");


describe('My first test Suite', function(){

it('My first Test case', function(){


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(4000);
//cy.get('.product').should('have.length',4) ovako daje i one koji su u invisible mode

//cy.get('.product:visible').should('have.length',4);

//cy.get('.products').find('.product').should('have.length',4)

cy.get('.product').should('have.length.at.least',5)
cy.get('.product:visible').should('have.length.at.least',4);
cy.get('.products').find('.product').should('have.length.at.least',4)

cy.get(':nth-child(2) > .product-action > button').click(); //ovde je spec kselektor za child selektor na mestu 2, 
//ali sta ako se red proizvoda promeni, ili se doda neki drugi proizvod na to mesto...ipak se trazi kao text, da ne zavisimo od indexa


cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click();
cy.get('.products').find('.product').contains('flower').click(); //nista se ne desava, treba da se cilja add to cart button

cy.get('.products').find('.product').each(($el, index, $list)=>
{const productName = $el.find('h4.product-name').text();

if(productName.includes('flower')){

    cy.wrap($el).contains('ADD TO CART').click() 
}

})



//than i text() kao non Cypress metoda

cy.get('.brand').then(function(logoText){
    cy.log(logoText.text())
}) 











}

)
}
)