/// <reference types="cypress" />
import { login, goToPostPublished,configPost,verifySlug,verifyUserListPost,verifyUrlPost,verifyPageOnePost,newPostPage,deletePost,retuntToPost, showPublishPost,verifyPostTitle,publicPost,newPostTitle,returnPostList,verifyPostTitleinWeb, selectPost } from "./listFuction.js";
import {Email, Password} from '../credencia'
context("Post Escenarios", () => {
  let title;
  let email = Email;
  let password = Password;
  
  beforeEach(() => {
    //iniciar sesion
    title= "lapruebae3243"
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

it("Escenario 6 Eliminar un post publicado", () => {
  //ir a la pagina de crear new Post
 goToPostPublished(cy, title)
 //ir a configuraciones del post
 configPost(cy);
 //eliminar el post
  deletePost(cy)
 
});

});
