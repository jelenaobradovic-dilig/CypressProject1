///<reference types="Cypress"/>


describe('Vezbanje 7-8', function(){

    it('First tast case', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('[href="#/offers"]').should('have.attr', 'target').and('include', '_blank')

        cy.get('[href="#/offers"]').invoke('attr','target').should('include', '_blank')

        //**Q ** zasto prethodni red radi i sa invoke i bez, primer je sa na kursu/

        cy.get('[href="#/offers"]').invoke('removeAttr', 'target').should('not.have.attr', 'target')
        cy.x

        //**Q * pojasnjenje za asinhronu prirodu Cypressa, ako sve pokrece asinhrono kako kad zna da gleda ima li ili nema target atribut/
        //i ako .click nije veyana za invoke/remove, vec ovako nakon, da li pokrece u novom prozoru ili ne
        

        cy.get('[href="#/offers"]').click()
        //cy.get('#search-field').type('b', {timeout:3000}).find('tbody tr td:nth-child(1)') ne moze find posle get, zasto?

        //da li je cena za bananu 87, ali sta ako nije polje pored, za polje pored koristim next, sta ako nije pored, ako hocu discount price?


        cy.get('#search-field').type('b', {timeout:3000})
        cy.get('tbody tr td:nth-child(1)').each(($el, index, $list)=>{
            var product = ($el).text()
            if (product.includes('Beans'))
            
            {//cy.wrap($el).next().should('contain', 3)
            cy.wrap($el).next().should('have.text', 38)

            //Q kako da poredim brojcane vrednosti, da ne ide contains, a ne prihvata equal

        //cy.wrap($el).next().should('have.value', 38)  //vraca value '' prazan?/
        //cy.wrap($el).next().should('have.value', '38')
        
        }

        cy.get('tbody tr td:nth-child(1)').each(($el, index, $list)=>{
            var product = ($el).text()
            if (product.includes('Beans'))
            
            {
                cy.get('tbody tr td:nth-child(3)').eq(index).should('contain', 36)
            }
        })


    })})})