/// <reference types="cypress" />
import { login, newPostPage, verifyPostTitle,newPostTitle,returnPostList } from "./listFuction.js";
context("Post Escenarios", () => {
  let title;
  beforeEach(() => {
    //iniciar sesion
    title= "titleTest"
    login(cy);
  });

  it("Escenario 1 crear un post como borrador con titulo", () => {
     
    //ir a la pagina de crear new Post
    newPostPage(cy);
    //escribir el titulo
    newPostTitle(cy,title);
    //volver a lista de post
    returnPostList(cy)
    //verificar titulo creado
    verifyPostTitle(cy, title)
    
  });

  // it('cy.reload() - reload the page', () => {
  //   // https://on.cypress.io/reload

  // })

  // it('cy.visit() - visit a remote url', () => {
  //   // https://on.cypress.io/visit

  //   // Visit any sub-domain of your current domain

  //   // Pass options to the visit

  //   })
});
