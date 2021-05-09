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
it("Escenario 2 eliminar un post de borradores", () => {
     
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
    //publicar el post
    publicPost(cy);
   //verificar post en web page
    verifyPostTitleinWeb(cy, title)
    
  });

  it("Escenario 4 verificar generar slug", () => {
    //ir a un post publicado 
    goToPostPublished(cy, title)
   //ir a configuraciones
   configPost(cy);
  //verificar y extraer la ruta asignada al post
   verifySlug(cy)
    //verificar titulo del post en la web page
   verifyPageOnePost(cy,title)
   
 });

 it("Escenario 5 verificar el post publicado pertenece al usuario", () => {
  //ir a la pagina principal de post publicados
 verifyPostTitleinWeb(cy, title)
 //verificar que el usuario cuenta con el post en sus publicaciones
 verifyUserListPost(cy, title)
 
});

it("Escenario 6 Eliminar un post publicado", () => {
  //ir a un post publicado
 goToPostPublished(cy, title)
 //ir a configuraciones del post
 configPost(cy);
 //eliminar el post
  deletePost(cy)
 
});

});
