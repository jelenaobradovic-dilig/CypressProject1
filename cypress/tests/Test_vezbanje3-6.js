///<reference types="Cypress"/>

describe('Vezbanje 3-11', function(){

    it('First tast case', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('input[value="radio1"]').check().should('be.checked') 


        //sve ok
        //cy.get('input[value="radio2"]').check()
       // cy.get('input[value="radio3"]').check()

        //po value
       cy.get('input[name="radioButton"]').check(['radio2']) 

       cy.get("input[value='radio2']").should('be.checked')

       //po indexu
       cy.get('input[name="radioButton"]').each(($el, index, $list)=>{
        if(index==2){
            cy.wrap($el).check()
        }
    }
    )

 //po textu
    //**Q** ne radi, zasto */

   
    // cy.get('input[name="radioButton"]').each(($el, index, $list)=>{
    //     var text = ($el).text()
    //     if(text.includes('radio2')){
    //         cy.wrap($el).check() 
    //     }
    // }
    // )


    // cy.get('.radioButton').each(($el, index, $list)=>{
    //     if(cy.wrap($el).contains('Radio2')){
    //         cy.wrap($el).check()
    //     }
    // }
    // )

    //CHECKBOX

//preko parent child ili ne, jer ne znam kad sve mogu da budu visible/invisible

   cy.get('#checkbox-example').find('input[type="checkbox"]').check(['option2'])
    cy.get('input[type="checkbox"]').check(['option3'])
    cy.get('input[type="checkbox"]').uncheck(['option3']).should('not.be.checked')

    cy.get("input[type='checkbox']").check(['option2', 'option1']).should('be.checked') // moze i za oba odjednom assert

    cy.get("input[type='checkbox']").eq(2).check()

    
    //DROPDOWN ima tag name select...zasto ovde nije value u [] kao kod radio i checkbox
   
    //STATIC

    cy.get('#dropdown-class-example').select('option2')
    cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
    
    //DYNAMIC

    cy.get('#autocomplete').type('bah')

    cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').each(($el, index, $list)=> //Q zasto radi sa find, zar find ne nalazi samo vidljive elemente
    {
    var country = ($el).text()
    cy.log(country)


    }

    )

    cy.get('#autocomplete').clear()

    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item-wrapper').each(($el, index, $list)=> 
    {
    var country = ($el).text()
    cy.log(country)
    })

    cy.get('.ui-menu-item').find('.ui-menu-item-wrapper').each(($el, index, $list)=> 
    {
    var country = ($el).text()
    if(country==="India") //kako da ne gleda velika i mala slova

    cy.wrap($el).click()
    }
    )
    cy.get('.inputs.displayed-class').should('be.visible')

    cy.get('#hide-textbox').click()
    cy.get('.inputs.displayed-class').should('not.be.visible')

    cy.get('#name').type('Jelena')
    cy.get('#alertbtn').click()
    cy.on('window:alert', (str)=>{expect(str).to.include('Jelena')})
    cy.on('window:alert',(str)=>{expect(str).to.be.equal('Hello Jelena, share this practice page and share your knowledge')})
    cy.get('#name').clear()
    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (str)=>{expect(str).to.include('Hello')})

})})

    
