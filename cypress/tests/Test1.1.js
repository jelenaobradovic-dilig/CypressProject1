/// <reference types="Cypress"/>



describe('Test1.1', function(){

    it('Test case', function(){

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

cy.get('input[type =search]').type('ra');
//cy.get('.product:visible').should('have.length',5);
cy.wait(4000);


cy.get('.products').find('.product').should('have.length',5);

cy.get('.products').find('.product').eq(2).find('button[type=button]').click(); //moze vise puta find, ali da li je praksa

cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();


//ALIAS skracivanje koda, a i ako se promeni lokator samo na 1 mestu menjamo

cy.get('.products').as('listaRA')


cy.get('@listaRA').find('.product-name').contains('Strawberry').click();//ovde kreira assert ali ne uzima text da ga recimo stampa i yato ne ide than itd

cy.get('@listaRA').find('.product').each(($el, index, $list)=>{
    const nameProduct = $el.find('.product-name').text(); // mora h4.product-name da bi samo taj niz bio tacan, text nije cypress, 
    //ali je rsolved zbog $el, jer on vraca reyultat i posle ide wrap ili than

    if(nameProduct.includes('Strawberry'))
    {cy.wrap($el).find('button[type=button]').click()}
}
)

//2.nacin da se klikne add to cart i stavljeno je berry pa u korpu ubacuje 2 proizvoda, raspberry i strawberry

cy.get('.products').find('.product').each(($el, index, $list)=>
{const productName = $el.find('h4.product-name').text();

if(productName.includes('berry')){

    cy.wrap($el).contains('ADD TO CART').click()
}

})


//than i text() kao non Cypress metoda

cy.get('.brand').then(function(logoText){
    cy.log(logoText.text())
}) 

//moj primer

cy.get('a[href="#/offers"]').then(function(x)
{cy.log(x.text())})

//stampa

 console.log('stampa u conzoli')
    cy.log('stampa')



}
)
}
)