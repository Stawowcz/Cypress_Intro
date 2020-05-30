describe('Api testing', () => {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
    it('GET - read', () => {
        cy.request('/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(43)
        })

    })
    it('GET - read', () => {
        cy.request('/employees/{id}').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })
    })

    it('POST - create', () => {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST', '/create', item)
        .its('body')
        .its('data')
        // .should('deep.eq', item)
        .should('include', {name:'test'})
        })

    it('PUT - update', () => {
        const item = {"name":"test1"}
        cy.request({method:'PUT', url:'/update/1', body: item, failOnStatusCode: false}).its('status').should('eq', 401)
    })

    it('DELETE - update', () => {
        id = req.id
        cy.request({method:'DELETE', url:'/delete/1'}).its('status').should('eq', 200)
    })
})


