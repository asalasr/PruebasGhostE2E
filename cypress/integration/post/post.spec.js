/// <reference types="cypress" />
import { login, configPost,verifySlug,verifyUserListPost,verifyUrlPost,verifyPageOnePost,newPostPage,deletePost,retuntToPost, showPublishPost,verifyPostTitle,publicPost,newPostTitle,returnPostList,verifyPostTitleinWeb, selectPost } from "./listFuction.js";
context("Post Escenarios", () => {
  let title;
  let email = "j.carvajalm@uniandes.edu.co";
  let password = "mfYyHi8q.Mix@r#";
  
  beforeEach(() => {
    //iniciar sesion
    title= "lapruebaCon4"
    login(cy,email,password);
  });

  it("Escenario 1 crear un post como borrador con titulo", () => {
     
    //ir a la pagina de crear new Post
    newPostPage(cy);
    //escribir el titulo
    newPostTitle(cy,title);
    //volver a lista de post
    returnPostList(cy)
    //verificar post en lista de post
    verifyPostTitle(cy, title)
    
  });
it("Escenario 2 eliminar un post ", () => {
     
    //seleccionar el post
   selectPost(cy,title);
    //ir a configuraciones del post
    configPost(cy);
   //eliminar el post
    deletePost(cy)
    
  });

  it("Escenario 3 publicar un post y verificarlo en la pagina", () => {
     //ir a la pagina de crear new Post
    newPostPage(cy);
    //escribir el titulo
    newPostTitle(cy,title);
    //volver a lista de post
    returnPostList(cy)
    //seleccionar el post creado
    retuntToPost(cy,title);
    //escribir el titulo
    publicPost(cy);
   //verificar post en web page
    verifyPostTitleinWeb(cy, title)
    
  });

  it("Escenario 4 verificar generar slug", () => {
    //ir a la pagina de crear new Post
   newPostPage(cy);
   //escribir el titulo
   newPostTitle(cy,title);
   //volver a lista de post
   returnPostList(cy)
   //seleccionar el post creado
   retuntToPost(cy,title);
   //escribir el titulo
   configPost(cy);
  //verificar post en web page
   verifySlug(cy)

   verifyPageOnePost(cy,title)
   
 });

 it("Escenario 5 verificar el post publicado pertenece al usuario", () => {
  //ir a la pagina de crear new Post
 verifyPostTitleinWeb(cy, title)
 verifyUserListPost(cy, title)
 
});

});
