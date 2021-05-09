import {Url} from '../credencia'

export function login(cy,email,password) {
  cy.visit(Url+"/ghost/#/signin");
  cy.get(".email").type(email);
  cy.get(".password").type(password);
  cy.get(".login").click();
}

export function newPostPage(cy) {
  cy.get('a[href="#/posts/"]').click({ force: true });
  cy.get('a[href="#/editor/post/"]').click({ force: true });
}

export function newPostTitle(cy, title) {
  cy.get('textarea[tabindex="1"]').type(title);
  cy.get('div[data-kg="editor"]').click();
}

export function newPostBody(cy, text) {
  cy.get('div[data-kg="editor"]').type(text);
}

export function returnPostList(cy) {
  cy.get('a[href="#/posts/"]').contains("Post").click({ force: true });
}

export function selectPost(cy, title) {
  cy.get('a[href="#/posts/"]').click({ force: true });
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });
}

export function verifyPostTitle(cy, title) {
  cy.get(".gh-content-entry-title").contains(title);
}

export function publicPost(cy) {
  cy.get("span").contains("Publish").click({ force: true });
  cy.get("button > span").contains("Publish").click({ force: true });
}

export function verifyPostTitleinWeb(cy, title) {
  cy.visit(Url+"/");
  cy.get('.post-card-title').contains(title);
}

export function configPost(cy){
  cy.get('button[class="post-settings"]').click({ force: true })
  
}

export function deletePost(cy){
  cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').click({ force: true })
  cy.wait(3000);
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click({ force: true });

}

export function retuntToPost(cy,title){
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });
}

export function verifySlug(cy){
  cy.get('.ghost-url-preview').invoke('text').then((text) => {
    cy.get('button[class="close settings-menu-header-action"]').click({ force: true })
  
   cy.visit(Url+"/"); 
   cy.visit(text)
});
}

export function  verifyPageOnePost(cy,title){
  cy.get('h1[class="post-full-title"]').contains(title)
  
}
export function verifyUserListPost(cy, title){
  cy.get('h2[class="post-card-title"]').contains(title).click({force:true});
  cy.get('h4[class="author-name"]').click({force:true});
  cy.get('h2[class="post-card-title"]').contains(title);
  
  
}

export function goToPostPublished(cy, title){
  cy.visit(Url+'/ghost/#/posts?type=published')
  cy.get(".gh-content-entry-title").contains(title).click({ force: true });

}