describe("Login", function() {
    it('Sing in', function() {
        cy.visit('https://react-redux.realworld.io/#/login?_k=ig9rjr')
        cy.get('input[type="email"]').type('jstawowcz@gmail.com')
        cy.get('input[type="password"]').type('Stawo123#@!')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})
