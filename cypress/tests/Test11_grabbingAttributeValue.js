///<reference types="Cypress"/>

describe("Grabbing Attribute Values", function()
{
    it("First test case", function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //visit metoda ako se primeni jos 1 u testu glavnu domen mora da bude isti, subfolderi mogu da budu razl
        //moze https://rahulshettyacademy.com/SeleniumPractice/
        //ne moze qaacademy.com.... kroz visit metodu ako izvucemo url (value) iz href(atribut),
        //ali moze da ode na drugi domen ako izbacimo target atribut

        // uvek radimo sa removeAttr

            //cy.get('#opentab').prop('href'). ne RadioNodeList, posto je prop JQ mora preko than metode
            cy.get('#opentab').then(function(x){

               //const url= x.prop('href')  ne moze cy.visit(url) ako je razlicit domen i onda se izbegava

               cy.log(x.prop('href'))
               cy.log(x.prop('target'))
               cy.log(x.prop('class'))

               cy.visit(x.prop('href')) //prolazi jer je isti main domain
            
               
               
            })

            //Umesto metode .prop moze i .invoke

            //cy.get('#opentab').invoke('prop', 'href').then((link) => {
                //let x = link;
               // cy.log('****************')
               // cy.log(x)
              //  cy.visit(x)
            //})

        })})