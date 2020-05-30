describe('Create and mark unmark as favourite', function(){
    
    Cypress.config('pageLoadTimeout', 100000)
    
    before('Sign in', function() {
        cy.SignIn()
    })

    it('Create a post', function() {
        // cy.contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.hash().should('include', '#/editor')
        // cy.location('hash').should('include', '#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type("Test")
            cy.get('input').eq(1).type("Test 1")
            cy.get('textarea').last().type("Test 2")
            cy.contains("Publish Article").click()
        })
        cy.url().should('include', 'article')
    })

    it('Mark unmark as favourite', function() {
        // cy.get('.nav-link').contains('JS123').click()
        cy.get('ul.navbar-nav').children().contains('JS123').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click({ multiple: true })
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click({multiple: true})
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go("back")  
    })
})