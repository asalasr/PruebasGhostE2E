export function login(cy,email,password) {
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.get(".email").type(email);
    cy.get(".password").type(password);
    cy.get(".login").click();
  }
  export function newPage(cy) {
    cy.get('a[href="#/pages/"]').click({ force: true });
    cy.get('a[href="#/editor/page/"]').click({ force: true });
  }
  export function newPageTitle(cy, title) {
    cy.get('textarea[tabindex="1"]').type(title);
    cy.get('div[data-kg="editor"]').click();
  }

  export function newPageContent(cy, text) {
    cy.get('div[data-kg="editor"]').type(text);
  }
  export function returnPageList(cy) {
    cy.get('a[href="#/pages/"]').contains("Page").click({ force: true });
  }
  export function verifyPageTitle(cy, title) {
    cy.get("h3").contains(title);
  }
  export function selectPage(cy, title) {
    cy.get('a[href="#/pages/"]').click({ force: true });
    cy.get("h3").contains(title).click({ force: true });
  }
  export function configurationPage(cy){
    cy.get('button[class="gh-btn gh-btn-editor gh-btn-icon only-has-icon gh-actions-cog ml3"]').click({ force: true })

  }

  export function deletePage(cy){
      cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click({ force: true })
      cy.wait(3000);
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({ force: true })
  }

  export function publishPage(cy){
    cy.get("span").contains("Publish").click({ force: true });
    cy.get("button > span").contains("Publish").click({ force: true });
  }
  export function verifyPageCreation(cy, title) {
    cy.get('div[class="gh-editor-post-status"]').contains("Published");
  }

  export function returnToPage(cy,title){
    cy.get("h3").contains(title).click({ force: true });
  }

  export function visitPages(cy){
    cy.visit("http://localhost:2368/ghost/#/pages");
  }
  export function linkVerification(cy,title){
    cy.get('a[class="post-view-link"]').click({ force: true });
  }

  export function verifyAuthor(cy, author) {
    cy.get('li[class="ember-power-select-multiple-option js-draggableObject draggable-object ember-view"]').contains(author);
    
  }
  
    