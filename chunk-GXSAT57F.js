import{e as k}from"./chunk-WNKOFMQ7.js";import{Eb as y,Fb as g,H as d,I as l,Lb as S,Sb as w,Ub as I,da as m,fa as f,ga as h,la as u,ob as b,ra as p,sb as _,tb as v,zb as C}from"./chunk-74RVS7D4.js";var j={formId:"commercebrand",title:"Commercebrand",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill commercebrand title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill commercebrand description"},{name:"Label",value:"Description"}]}]};var x=(()=>{class t extends g{constructor(){super({name:"commercebrand"}),this.commercebrands=this.getDocs(),this.commercebrandsByAuthor={},this.get(),this.filteredDocuments(this.commercebrandsByAuthor)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var D=(()=>{class t{get rows(){return this._commercebrandService.commercebrands}constructor(i,r,e,c,a,F){this._translate=i,this._commercebrandService=r,this._alert=e,this._form=c,this._core=a,this._router=F,this.columns=["name","description"],this.commerce=this._router.url.includes("/commerce/commercebrands/")?this._router.url.replace("/commerce/commercebrands/",""):v.commerceId||"",this.form=this._form.getForm("commercebrand",j),this.config={create:()=>{let o={};this._form.modal(this.form,{label:"Create",click:(n,s)=>{this.commerce&&(n.commerce=this.commerce),this._commercebrandService.create(n),s()}},o,n=>{console.log(n);let s=this._form.getComponent(this.form,"name");s&&(s.hidden=!0),o.type})},update:o=>{this._form.modal(this.form,[],o).then(n=>{this._core.copy(n,o),this._commercebrandService.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this commercebrand?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._commercebrandService.delete(o)}}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("commercebrand","url",o)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]}}_bulkManagement(i=!0){return()=>{this._form.modalDocs(i?[]:this.rows).then(r=>{if(i)for(let e of r)this.commerce&&(e.commerce=this.commerce),this._commercebrandService.create(e);else{for(let e of this.rows)r.find(c=>c._id===e._id)||this._commercebrandService.delete(e);for(let e of r){let c=this.rows.find(a=>a._id===e._id);c?(this._core.copy(e,c),this._commercebrandService.update(c)):(this.commerce&&(e.commerce=this.commerce),e.__created=!1,this._commercebrandService.create(e))}}})}}static{this.\u0275fac=function(r){return new(r||t)(m(S),m(x),m(y),m(I),m(C),m(b))}}static{this.\u0275cmp=f({type:t,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","\u0411\u0440\u0435\u043D\u0434\u0438",3,"columns","config","rows"]],template:function(r,e){r&1&&p(0,"wtable",0),r&2&&u("columns",e.columns)("config",e.config)("rows",e.rows)},dependencies:[w],encapsulation:2})}}return t})();var A=[{path:":commerce_id",component:D}],K=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({imports:[_.forChild(A),k]})}}return t})();export{K as CommercebrandsModule};
