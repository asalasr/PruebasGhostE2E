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
  
  it("Escenario 1 Crear un tag", () => {
  		//crear nuevo tag
    	newTag(cy,url,title);
    	//espera
   		wait();
   		//guardad tag
   		saveTag(cy,url,title);
   		//redireccionar
    	irA(cy,url,"ghost/#/tags");
  });
  
  it("Escenario 2 Verificar tag habilitado en un Post ", () => {
  		//ir a un Post
     	goPost(cy,post,title);
     	//espera
     	wait();
     	//Valida el tag habilitado en los post
		verifyTagEnableInPost(cy,post,title);
  });

  it("Escenario 3 Verificar tag habilitado en un Page", () => {
	    //nueva Page
		NewPage(cy,url,page,title);
		//espera
     	wait();
     	//redireccionar
     	irA(cy,url,"ghost/#/pages");
     	//Valida el tag habilitado en las pages
		verifyTagEnableInPage(cy,url,page,title);
  });

  it("Escenario 4 Eliminar un Tag", () => {
  		//seleccionar un tag
        selectTag(cy,title);
        //espera
     	wait();
     	//borrar el tag
		deleteTag(cy,title);
 });

 it("Escenario 5 Verificar en Tag en el sitio web de lector", () => {
		//redireccionar
    	irA(cy,url,post);
    	//espera
     	wait();
     	//validar tag en el post del sitio web
		verifyTaginReaderWeb(cy,url,post,tag);
 });

});
