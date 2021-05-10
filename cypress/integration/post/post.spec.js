/// <reference types="cypress" />
import { login, goToPostPublished,configPost,verifySlug,verifyUserListPost,verifyUrlPost,verifyPageOnePost,newPostPage,deletePost,retuntToPost, showPublishPost,verifyPostTitle,publicPost,newPostTitle,returnPostList,verifyPostTitleinWeb, selectPost } from "./listFuction.js";
import {Email, Password} from '../credencia'
context("Post Escenarios", () => {
  let title;
  let email = Email;
  let password = Password;
  
  beforeEach(() => {
    //Given: Estando logeados en la aplicacion
    title= "lapruebae3243"
    login(cy,email,password);
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+ 
  "WHEN ir a la pagina de crear new Post" +
  "WHEN escribir el titulo" +
  "WHEN volver a lista de post" +
  "THEN: verificar post en lista de post.", () => {
     
    //WHEN ir a la pagina de crear new Post
    newPostPage(cy);
    //WHEN escribir el titulo
    newPostTitle(cy,title);
    //WHEN volver a lista de post
    returnPostList(cy)
    //THEN verificar post en lista de post
    verifyPostTitle(cy, title)
    
  });
it("Given: Estando loggeado exitosamente en la aplicación."+ 
"WHEN seleccionar el post" +
"WHEN ir a configuraciones del post" +
"THEN: eliminar el post.", () => {
     
    //WHEN seleccionar el post
   selectPost(cy,title);
    // WHEN ir a configuraciones del post
    configPost(cy);
   //THEN eliminar el post
    deletePost(cy)
    
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+
      "WHEN crear un nuevo Post" +
      "WHEN publicarlo" +
      "THEN: verificar el post en la web page.", () => {
     //WHEN ir a la pagina de crear new Post
    newPostPage(cy);
    //WHEN escribir el titulo
    newPostTitle(cy,title);
    //WHEN volver a lista de post
    returnPostList(cy)
    //WHEN seleccionar el post creado
    retuntToPost(cy,title);
    //WHEN publicar el post
    publicPost(cy);
   // THEN verificar post en web page
    verifyPostTitleinWeb(cy, title)
    
  });

  it("Given: Estando loggeado exitosamente en la aplicación."+
  "WHEN ir a un post publicado y verificar el slug" +
  "THEN el post esta publicado en esa ruta", () => {
    //WHEN ir a un post publicado 
    goToPostPublished(cy, title)
   //WHEN ir a configuraciones
   configPost(cy);
  //WHEN verificar y extraer la ruta asignada al post
   verifySlug(cy)
    //THEN verificar titulo del post en la web page
   verifyPageOnePost(cy,title)
   
 });

 it("Given: Estando loggeado exitosamente en la aplicación."+
 "WHEN ir a la pagina principal de post publicados" +
 "THEN verificar que el usuario cuenta con el post en sus publicaciones", () => {
  // WHEN ir a la pagina principal de post publicados
 verifyPostTitleinWeb(cy, title)
 //THEN verificar que el usuario cuenta con el post en sus publicaciones
 verifyUserListPost(cy, title)
 
});

it("Given: Estando loggeado exitosamente en la aplicación."+
"WHEN ir a un post publicado" +
"THEN eliminar el post", () => {
  //WHEN ir a un post publicado
 goToPostPublished(cy, title)
 //WHEN ir a configuraciones del post
 configPost(cy);
 //THEN eliminar el post
  deletePost(cy)
 
});

});
