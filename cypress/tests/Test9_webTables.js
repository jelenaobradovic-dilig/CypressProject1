///<reference types="Cypress"/>

describe("Web tables", function()
{
    it("First test case", function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

//kako validirati da je neka odredjena celija sa odredjenom vrednoscu

//ali ne po redu i koloni jer je to promenljiva kategorija, vec recimo po textu u celiji pored u istom redu
//tr-th-th-tr header red tabele
//tr--td-td-tr redovi tabele
//tr--td--td--tr itd
//NEXT METHOD hvata sledeci element u dom, ali da imaju istog roditelja, 
//znaci hvata sledecu celiju ali iz istog reda...tr mora da bude isti a hvata sledeci td

cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list)=>
{
const textTableCell = $el.text();

if(textTableCell==='Master Selenium Automation in simple Python Language') //moze i if(textTableCell.includes('Selenium'))

{ 
    cy.wrap($el).next().should("contain", '25')

    //cy.wrap($el).next().click()
    cy.wrap($el).next().contains('25').click() //isto radi

    //cy.wrap($el).next().should("be.equal", '25') ???? zasto ne radi sa equal expected <td> to equal **'25'**
    
}

})

    })
})