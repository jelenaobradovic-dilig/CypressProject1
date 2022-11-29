///<reference types="Cypress"/>



describe('Test checkbox', function(){

    it('Test case 1', function(){
    
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    //cy.get('#checkBoxOption1').uncheck().should('be.checked');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
    //cy.get("input[type='checkbox']").check()
    cy.get("input[type='checkbox']").check(['option2'])
    cy.get("input[type='checkbox']").check(['option2']) //moze 2x check za isti element, ne prijavljuje gresku

    cy.get("input[type='checkbox']").check(['option2', 'option1'])


    //RADIO BUTTON- kada ne moze da se cekira vise, vec samo 1

cy.get("input[type='radio']").check() //biramo kao css selektor ono sto je zajednicko da dobijemo niz
//ovde moramo da izaberemo koji u nizu jer ne moze da se puste svi odjednom, moze samo 1
//ako idemo samo sa check, on pusti prvi, pa prebaci na 2. pa na 3. i to samo ostane cekirano
//pa u sledecoj naredbi cekiram radio2

cy.get("input[type='radio']").check(['radio2'])
cy.get("input[value='radio2']").should('be.checked')

cy.get('[value="radio2"]').check().should('be.checked')

cy.get("input[value='radio1']").should('not.be.checked')

cy.get("input[type='checkbox']").eq(2).check()   
    
    })})
    
    
    
    
    