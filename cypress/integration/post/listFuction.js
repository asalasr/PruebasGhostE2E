export function login(){
    cy.visit('http://localhost:2368/ghost/#/signin')
    cy.get('.email').type('j.carvajalm@uniandes.edu.co')
    cy.get('.password').type('mfYyHi8q.Mix@r#')
    cy.get('.login').click()
  }
  