import{e as I}from"./chunk-WQOG2BLD.js";import{I as m,L as f,M as v,R as _,Ta as y,X as b,Xa as C,db as n,gb as g,hb as P,ib as S,lb as a,q as p,qb as w,r as h,t as s,xb as k,zb as j}from"./chunk-DO5VK4O3.js";var x={formId:"commerceproduct",title:"Commerceproduct",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill commerceproduct title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill commerceproduct description"},{name:"Label",value:"Description"}]},{name:"Text",key:"country",fields:[{name:"Placeholder",value:"fill commerceproduct country"},{name:"Label",value:"Country"}]},{name:"Number",key:"volume",fields:[{name:"Placeholder",value:"fill commerceproduct volume"},{name:"Label",value:"Volume"}]},{name:"Number",key:"weight",fields:[{name:"Placeholder",value:"fill commerceproduct weight"},{name:"Label",value:"Weight"}]},{name:"Number",key:"price",fields:[{name:"Placeholder",value:"fill commerceproduct price"},{name:"Label",value:"Price"}]},{name:"Photo",key:"thumb",fields:[{name:"Label",value:"Header picture"}]},{name:"Photos",key:"thumbs",fields:[{name:"Label",value:"Detailed pictures"}]}]};var F=(()=>{class o extends g{constructor(r,t,e,i){super({name:"commerceproduct"},r,t,e,i)}static{this.\u0275fac=function(t){return new(t||o)(s(S),s(P),s(a),s(n))}}static{this.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var d=(()=>{class o{setProducts(r=this._page){this._page=r,this._core.afterWhile(this,()=>{this._commerceproductService.get({page:r}).subscribe(t=>{this.rows.splice(0,this.rows.length),this.rows.push(...t)})},250)}constructor(r,t,e,i,l,L){this._translate=r,this._commerceproductService=t,this._alert=e,this._form=i,this._core=l,this._router=L,this.columns=["name"],this.commerce=this._router.url.includes("/commerceproducts/")?this._router.url.replace("/commerceproducts/",""):"",this.form=this._form.getForm("commerceproduct",x),this.config={paginate:this.setProducts.bind(this),perPage:20,setPerPage:this._commerceproductService.setPerPage.bind(this._commerceproductService),allDocs:!1,create:()=>{this._form.modal(this.form,{label:"Create",click:(c,u)=>{this.commerce&&(c.commerce=this.commerce),this._commerceproductService.create(c),this.setProducts(),u()}})},update:c=>{this._form.modal(this.form,[],c).then(u=>{this._core.copy(u,c),this._commerceproductService.update(c)})},delete:c=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this commerceproduct?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._commerceproductService.delete(c),this.setProducts()}}]})},buttons:[{icon:"1x_mobiledata",hrefFunc:c=>"/commerceproductquantities/product/"+c._id},{icon:"cloud_download",click:c=>{this._form.modalUnique("commerceproduct","url",c)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this._page=1,this.setProducts()}_bulkManagement(r=!0){return()=>{this._form.modalDocs(r?[]:this.rows).then(t=>{if(r)for(let e of t)this.commerce&&(e.commerce=this.commerce),this._commerceproductService.create(e),this.setProducts();else{for(let e of this.rows)t.find(i=>i._id===e._id)||(this._commerceproductService.delete(e),this.setProducts());for(let e of t){let i=this.rows.find(l=>l._id===e._id);i?(this._core.copy(e,i),this._commerceproductService.update(i)):(this.commerce&&(e.commerce=this.commerce),e.__created=!1,this._commerceproductService.create(e),this.setProducts())}}})}}static{this.\u0275fac=function(t){return new(t||o)(m(w),m(F),m(a),m(j),m(n),m(y))}}static{this.\u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","Products",3,"columns","config","rows"]],template:function(t,e){t&1&&b(0,"wtable",0),t&2&&_("columns",e.columns)("config",e.config)("rows",e.rows)},dependencies:[k],encapsulation:2})}}return o})();var N=[{path:"",component:d},{path:":commerce_id",component:d}],G=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=v({type:o})}static{this.\u0275inj=h({imports:[C.forChild(N),I]})}}return o})();export{G as CommerceproductsModule};