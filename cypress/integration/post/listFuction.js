export function login(cy) {
  cy.visit("http://localhost:2368/ghost/#/signin");
  cy.get(".email").type("j.carvajalm@uniandes.edu.co");
  cy.get(".password").type("mfYyHi8q.Mix@r#");
  cy.get(".login").click();
}

export function newPostPage(cy) {
  cy.get('a[href="#/posts/"]').click({ force: true });
  cy.get('a[href="#/editor/post/"]').click({ force: true });
}

export function newPostTitle(cy,title) {
  cy.get('textarea[tabindex="1"]').type(title);
  cy.get(
    'div[data-kg="editor"]'
  ).click();
}

export function newPostBody(cy,text) {
  cy.get(
    'div[data-kg="editor"]'
  ).type(text);
}


export function returnPostList(cy) {
 
  cy.get('a[href="#/posts/"]').then($links => {
    var randomLink = $links.get(1);
        randomLink.click({force: true});
  
    cy.wait(1000);
  
});


}


export function verifyPostTitle(cy, title) {
 
  cy.get('h3').contains(title)
}