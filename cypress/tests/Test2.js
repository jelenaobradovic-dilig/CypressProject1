///<reference types="Cypress"/>



describe('Test place order', function(){

it('Test case 1', function(){


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

cy.get('.products').as('listOfProducts');

cy.wait(4000);

cy.get('@listOfProducts').each(($el, index, $list)=>{

    const productName = $el.find('h4.product-name').text()

    if(productName.includes('Brocolli'))
    {cy.wrap($el).contains('ADD TO CART').click()}
}

)


cy.get('.cart-icon').click();

cy.get('.action-block').contains('PROCEED TO CHECKOUT').click(); // da li mora prvo get element pa contains ili moze odmah contains


//cy.wait(4000); //zasto radi tek kad dodam wait


//cy.get('button').contains('Place Order').click();

cy.contains('Place Order').click() //kad idem samo na contains place order, a ne pre toga get button pa contains radi i bez waita, zasto?


})})





