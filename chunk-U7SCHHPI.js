import{a as O}from"./chunk-LU4TI5X5.js";import{e as T}from"./chunk-WNKOFMQ7.js";import{$ as o,Aa as M,Db as E,Fa as c,Ga as S,Ha as b,I as k,Mb as I,Z as u,ab as P,da as h,fa as l,ga as y,ja as C,la as d,na as v,pa as i,pb as _,qa as n,ra as a,sb as w,tb as p,va as f}from"./chunk-74RVS7D4.js";var D=(()=>{class t{constructor(){this.url=p.url}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-product"]],inputs:{product:"product"},standalone:!1,decls:7,vars:6,consts:[[1,"documents-triggers__item",3,"routerLink"],[1,"documents-triggers__img"],["alt","",3,"src"],[1,"documents-triggers__title"],[1,"documents-triggers__description",3,"title"]],template:function(r,e){r&1&&(i(0,"div",0)(1,"div",1),a(2,"img",2),n(),i(3,"div",3),c(4),n(),i(5,"div",4),c(6),n()()),r&2&&(M("routerLink","/product/",e.product.url||e.product._id,""),o(2),d("src",e.url+e.product.thumb,u),o(2),S(e.product.name),o(),d("title",e.product.description),o(),b(" ",e.product.description.slice(0,100)," "))},dependencies:[_],encapsulation:2})}}return t})();function U(t,j){if(t&1&&(i(0,"div",21),a(1,"app-product",22),n()),t&2){let s=j.$implicit;o(),d("product",s)}}var L=(()=>{class t{constructor(s,r){this.userService=s,this._http=r,this.isMenuOpen=!1,this.products=[],this.page=1,this._http.get("/api/commerce/products"+this._query()).subscribe(e=>this.products.push(...e.map(m=>(m.quantity=m.options?.map(g=>g.quantity||0).reduce((g,q)=>g+q,0),m))))}back(){window.history.back()}_query(){return"?skip=0&limit=40"+(p.commerceId?"&commerce="+p.commerceId:"")}static{this.\u0275fac=function(r){return new(r||t)(h(O),h(E))}}static{this.\u0275cmp=l({type:t,selectors:[["ng-component"]],standalone:!1,decls:26,vars:8,consts:[[1,"documents-wrapper"],[1,"documents-container"],[1,"documents-list"],[1,"documents-header"],[1,"documents-header-left"],[1,"documents-header-left__arrow",3,"click"],[1,"material-icons"],["routerLink","/profile",1,"documents-header-left__avatar"],["alt","",3,"src"],["translate","",1,"documents-header__title"],[1,"burger-wrap",3,"click"],[1,"burger"],[1,"documents-sidebar"],[1,"documents-sidebar__close",3,"click"],[1,"documents-sidebar-content"],["translate","",1,"documents-sidebar__title"],[1,"documents-main"],[1,"documents-main-content"],[1,"documents-main-row"],[1,"documents-triggers"],["class","documents-triggers__wrap",4,"ngFor","ngForOf"],[1,"documents-triggers__wrap"],[3,"product"]],template:function(r,e){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),f("click",function(){return e.back()}),i(6,"span",6),c(7,"arrow_back_ios"),n()(),i(8,"div",7),a(9,"img",8),n()(),i(10,"div",9),c(11," Theme.Products "),n(),i(12,"div",10),f("click",function(){return e.isMenuOpen=!e.isMenuOpen}),a(13,"div",11),n()(),i(14,"div",12)(15,"div",13),f("click",function(){return e.isMenuOpen=!e.isMenuOpen}),i(16,"span",6),c(17,"close"),n()(),i(18,"div",14)(19,"div",15),c(20," Theme.Filters "),n()()(),i(21,"div",16)(22,"div",17)(23,"div",18)(24,"div",19),C(25,U,2,1,"div",20),n()()()()()()()),r&2&&(v("documents-wrapper--open",e.isMenuOpen),o(9),d("src",e.userService.thumb,u),o(4),v("burger--close",e.isMenuOpen),o(),v("documents-sidebar--open",e.isMenuOpen),o(11),d("ngForOf",e.products))},dependencies:[_,I,P,D],encapsulation:2})}}return t})();var z=[{path:"",component:L}],Z=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=y({type:t})}static{this.\u0275inj=k({imports:[w.forChild(z),T]})}}return t})();export{Z as ProductsModule};
