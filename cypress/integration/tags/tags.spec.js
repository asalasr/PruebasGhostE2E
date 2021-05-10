/// <reference types="cypress" />
import { login,newTag,deleteTag,verifyTagEnableInPost,verifyTagEnableInPage,verifyTaginReaderWeb,wait,saveTag,irA,goPost,NewPage,selectTag } from "./listFuctionTags.js";
import {Email, Password, Url} from '../credencia'
context("Tags Escenarios", () => {
  //datos acceso
  let url = Url+"/";
  let email = Email;
    let password = Password;
  //variables
  let title;
  let post;
  let page;
  let tag;
  
  beforeEach(() => {
    	//iniciar variables
    	title= "Automatizacion"
    	post = "Welcome";
    	page = "Hola";
  		tag = "Getting Started";
  		//iniciar session
    	login(cy,url,email,password);
  });
  
  it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso al listado d tags. " +
        "THEN: creo un nuevo tag.", () => {
  		//crear nuevo tag
    	newTag(cy,url,title);
    	//espera
   		wait();
   		//guardad tag
   		saveTag(cy,url,title);
   		//redireccionar
    	irA(cy,url,"ghost/#/tags");
  });
  
  it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso a un post. " +
        "THEN: se valida que el tag este habilitado.", () => {
  		//ir a un Post
     	goPost(cy,post,title);
     	//espera
     	wait();
     	//Valida el tag habilitado en los post
		verifyTagEnableInPost(cy,post,title);
  });

  it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso a una Page. " +
        "THEN: se valida que el tag este habilitado.", () => {
	    //nueva Page
		NewPage(cy,url,page,title);
		//espera
     	wait();
     	//redireccionar
     	irA(cy,url,"ghost/#/pages");
     	//Valida el tag habilitado en las pages
		verifyTagEnableInPage(cy,url,page,title);
  });

  it("Given: Estando loggeado exitosamente en la aplicación. WHEN: proceso al listado de tags. " +
        "THEN: se selecciona el tag y se elimina.", () => {
  		//seleccionar un tag
        selectTag(cy,title);
        //espera
     	wait();
     	//borrar el tag
		deleteTag(cy,title);
 });

 it("Given: Se ingresa al web de lectura. WHEN: se busca el post con el tag asociado" +
        "THEN: verificado el tag se selecciona", () => {
		//redireccionar
    	irA(cy,url,post);
    	//espera
     	wait();
     	//validar tag en el post del sitio web
		verifyTaginReaderWeb(cy,url,post,tag);
 });

});
