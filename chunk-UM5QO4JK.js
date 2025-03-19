import{a as k}from"./chunk-RG4AY3XS.js";import{e as w}from"./chunk-WNKOFMQ7.js";import{Eb as g,I as a,Lb as y,Sb as S,Ub as b,da as m,fa as u,ga as f,la as h,ob as p,ra as d,sb as _,tb as v,zb as C}from"./chunk-74RVS7D4.js";var M={formId:"commercestore",title:"Commercestore",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill commercestore title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill commercestore description"},{name:"Label",value:"Description"}]}]};var l=(()=>{class r{get rows(){return this._commercestoreService.commercestores}constructor(i,t,e,c,s,I){this._translate=i,this._commercestoreService=t,this._alert=e,this._form=c,this._core=s,this._router=I,this.columns=["name","description"],this.commerce=this._router.url.includes("/commerce/commercestores/")?this._router.url.replace("/commerce/commercestores/",""):v.commerceId||"",this.form=this._form.getForm("commercestore",M),this.config={create:this.commerce?()=>{this._form.modal(this.form,{label:"Create",click:(o,n)=>{this.commerce&&(o.commerce=this.commerce),this._commercestoreService.create(o),n()}})}:null,update:this.commerce?o=>{this._form.modal(this.form,[],o).then(n=>{this._core.copy(n,o),this._commercestoreService.update(o)})}:null,delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this commercestore?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._commercestoreService.delete(o)}}]})},buttons:[{icon:"1x_mobiledata",hrefFunc:o=>"/commerce/commerceoptions/store/"+o._id},{icon:"cloud_download",click:o=>{this._form.modalUnique("commercestore","url",o)}}],headerButtons:[this.commerce?{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"}:null,this.commerce?{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}:null]}}_bulkManagement(i=!0){return()=>{this._form.modalDocs(i?[]:this.rows).then(t=>{if(i)for(let e of t)this.commerce&&(e.commerce=this.commerce),this._commercestoreService.create(e);else{for(let e of this.rows)t.find(c=>c._id===e._id)||this._commercestoreService.delete(e);for(let e of t){let c=this.rows.find(s=>s._id===e._id);c?(this._core.copy(e,c),this._commercestoreService.update(c)):(this.commerce&&(e.commerce=this.commerce),e.__created=!1,this._commercestoreService.create(e))}}})}}static{this.\u0275fac=function(t){return new(t||r)(m(y),m(k),m(g),m(b),m(C),m(p))}}static{this.\u0275cmp=u({type:r,selectors:[["ng-component"]],standalone:!1,decls:1,vars:3,consts:[["title","\u0422\u043E\u0440\u0447\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0443",3,"columns","config","rows"]],template:function(t,e){t&1&&d(0,"wtable",0),t&2&&h("columns",e.columns)("config",e.config)("rows",e.rows)},dependencies:[S],encapsulation:2})}}return r})();var F=[{path:"",component:l},{path:":commerce_id",component:l}],z=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=f({type:r})}static{this.\u0275inj=a({imports:[_.forChild(F),w]})}}return r})();export{z as CommercestoresModule};
