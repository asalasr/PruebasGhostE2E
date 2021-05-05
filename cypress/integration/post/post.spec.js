/// <reference types="cypress" />
import {login} from './listFuction.js'
context('Post Escenarios', () => {
  beforeEach(() => {
    
   login()
  })

  it('Escenario 1 crear un post', () => {
    // https://on.cypress.io/go
    //cy.url().should('include', '/users/1/edit')
    //click en post
    cy.get('a[href="#/posts/"]').click({force:true})

    
  })

  // it('cy.reload() - reload the page', () => {
  //   // https://on.cypress.io/reload
    
  // })

  // it('cy.visit() - visit a remote url', () => {
  //   // https://on.cypress.io/visit

  //   // Visit any sub-domain of your current domain

  //   // Pass options to the visit
    
  //   })
  
})

