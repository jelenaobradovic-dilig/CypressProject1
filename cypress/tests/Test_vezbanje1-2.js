///<reference types = "Cypress"/>


describe('Vezbanje', function()
{it('Test case', function(){

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

cy.get('.search-keyword').type('b');

//**Q**  kada stavljam wait, recimo ovde mi ne prolazi sledeci assert bez wait, jer ne stigne da izlista proizvode



//cy.get('.product').should('have.length',8) //pada test jer ovako izlista i element koji je invisible, mora element iznad (.products) da se hvala, 
//pa  se ide kroz niz sa find koji gleda samo visible elemente

//**Q** kada pravim assert za duzinu niza, kako ja znam koju vrednost stavljam, iz neke specifikacije ili odradim manuelno pa vidim, sta ako niz ima 150el?

cy.get('.products',{timeout : 5000}).find('.product').should('have.length',8);

cy.get('.products').as('listaB');

cy.get('@listaB').find (".product").contains("ADD TO CART").click() //radi, ne  padne, ali ovako klikne samo na prvi iz liste koji se pojavi, ne na sve

//mogu po mestu u nizu, niz krece od 0, kaoArrayList

//cy.get('.products').find('.product').eq(3).click() // ovako klicne na ceo prozor, ne samo na add to cart, i ne doda ga u korpu

//ali posto sam kliknula na sliku izasao je prozor koji sakriva add to cart i zato pada sledeci assert

cy.get('.products').find('.product').eq(3).contains ('ADD TO CART').click()
cy.get('.products').find('.product').eq(3).find('button[type="button"]').click() //radi isto kao prethodno

//**Q** sa contains trazi text bilo gde u elementu i  ako ga nadje klikne na taj deo, znaci klikne gre pise Beetroot, ne na add to cart

cy.get('.products').find('.product').contains ('Beetroot').click()

//**Q** da li je praksa da ide find pa opet u nizu find, radi ali da li je ok, znam da je ovde lakse preko contains text ali u nekoj drugoj varijanti?

cy.get('@listaB').find (".product").each(($el, index, $list)=>{

//**Q**  objasnjenje za wrap($el), jel uvek ide kad koristimo .each?

//recimo da hocu svaki iz niza da dodam u korpu

    cy.wrap($el).contains('ADD TO CART').click()
    

//ako hocu na odredjeni iz niza da kliknem add to cart, a trazim po nekom drugom selektoru


//**Q**recimo ovde ne stavljam wrap ispred el, a radi, zasto

var naziv = ($el).find('h4.product-name').text() 

if(naziv.includes('berry'))

//**Q** razlika izmedju contains i includes...contains ide za element, includes za text?

(cy.wrap($el).contains('ADD TO CART').click())

     
    }
)

//**Q** stampa u kozoli, then? moze i bez? opet wrap, objasnjenje

    cy.get('@listaB').find (".product").each(($el, index, $list)=>{

        var naziv = ($el).find('h4.product-name').text()
        if(naziv.includes('berry'))
        {cy.log(naziv)}
               
    })
    

cy.get('@listaB').find (".product").each(($el, index, $list)=>{

    cy.wrap($el).find('h4.product-name').then(function(naziv){
        if(naziv.text().includes('anana'))
        {cy.log(naziv.text())}
           
        }
    )
})


cy.get('.cart-icon').click();

//cy.get('.action-block').contains('PROCEED TO CHECKOUT').click(); // da li mora prvo get element pa contains ili moze odmah contains

cy.contains('PROCEED TO CHECKOUT').click()

//cy.wait(4000); //zasto radi tek kad dodam wait

//cy.get('button').contains('Place Order').click();

cy.contains('Place Order').click() //kad idem samo na contains place order, a ne pre toga get button pa contains radi i bez waita, zasto?

})})