///<reference types="Cypress"/>
describe('Test dropdown', function(){

    it('Test case 1', function(){
    
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //static dropdown
    cy.get('#dropdown-class-example').select('option2')
    //cy.get('#dropdown-class-example').select('option2').should('have.value','option1')
    cy.get('#dropdown-class-example').select('option2').should('have.value','option2')


    //dynamic dropdown

    cy.get('#autocomplete').type('ind') // da li ovde treba then...posto mora prvo da se ukuca ind pa tek onda da se ide kroz niz sa each gde pravimo const/var...razlika? 
    //koja nije cypress

    //cy.get('#ui-id-1').find('.ui-menu-item').each(($el, index, $list)=> //ovde nije isao preko child? znaci bez .find !!! zato sto tako trazimo visible...a ovi iz dropdown su invisible, 
    //tako da ne treba child, da su bas tog tipa iz niza


    //kako da udjemo jos 1 korak ispod u css selektor, stavimo razmak
    cy.get('.ui-menu-item div').each(($el, index, $list)=> {const country = $el.text() 
        if(country==="India") //kako da ne gleda velika i mala slova

        cy.wrap($el).click()} )

        //mozemo da proverimo da li je stvarno izabrano india preko value should have

        cy.get('#autocomplete').should('have.value','India');


     
    })})