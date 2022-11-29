///<reference types="Cypress"/>



describe('Test Child tabs', function()
{it('Test case 1', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//TARGET ATRIBUTE u HTMLu otvara link iz href atributa u novom prozoru (child tab)// target="blank" otvara u novom praznom prozoru
//ako nema target atributa, ne otvara se novi prozor vec se otvara ta stanica u istom
//Cypress nema mogucnost da radi sa child tabovima

//ako hocemo da proverimo da li se otvara u novom prozoru, radimo assert za postojanje target atributa
//Cypress ima mogucnost da manipulese DOM i onda mozemo da pokusamo da uklonimo target atribut

//INVOKE METHOD ??? invoke a function on the previously yielded subject ???
//INVOKE moze ako hocemo click na element koji nije vidljivna sajtu u tom trenutku ali postoji u invisible

//Mozemo da vidimo vrednost atributa iz odredjenih tagova
//So Cypress commands actually do not run synchronously, once they are run
// to see if the element with that selector is available or not, and we want to call the .attr function 
//only when the element is available, so kind we want to wait till the time element becomes\
 //available and therefore we have to use the .invoke() function.

//cy.get('img').invoke('attr', 'src').should('include', 'myLogo') attr je funkcija nad src atributom

cy.get('#opentab').should('have.attr','target')

cy.get('#opentab').invoke('attr','target').should('include', '_blank') //sta sadrzi atribut


cy.get('#opentab').invoke('removeAttr','target').click() //ukloni atribut
















})})