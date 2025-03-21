import{a as $}from"./chunk-NPWTPWDX.js";import{e as E}from"./chunk-WNKOFMQ7.js";import{Eb as j,Fb as M,H as b,I as w,Lb as N,P as d,Pb as D,Q as h,Rb as V,Sb as W,Ub as F,a as y,b as C,da as m,fa as T,ga as P,ja as S,la as n,ob as k,pa as s,qa as l,sb as x,tb as I,ua as f,va as _,wa as v,zb as L}from"./chunk-74RVS7D4.js";var z=(()=>{class o extends M{constructor(){super({name:"commerceproduct"})}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=b({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();function H(o,u){if(o&1){let e=f();s(0,"winput",3),_("wChange",function(r){let i=d(e).$implicit,a=v();return i.enabled=r,h(a.update(i))}),l()}if(o&2){let e=u.$implicit;n("value",e.enabled)}}function U(o,u){if(o&1){let e=f();s(0,"winput",3),_("wChange",function(r){let i=d(e).$implicit,a=v();return i.top=r,h(a.update(i))}),l()}if(o&2){let e=u.$implicit;n("value",e.top)}}var g=(()=>{class o{update(e){this._commerceproductService.update(e)}constructor(e,t,r,i,a,A,B){this._tagService=e,this._translate=t,this._commerceproductService=r,this._alert=i,this._form=a,this._core=A,this._router=B,this.tags=[],this.columns=["enabled","top","name","tags"],this.commerce=this._router.url.includes("/commerce/commerceproducts/")?this._router.url.replace("/commerce/commerceproducts/",""):I.commerceId||"",this.form=this._form.getForm("commerceproduct",{formId:"commerceproduct",title:"Commerceproduct",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill commerceproduct title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill commerceproduct description"},{name:"Label",value:"Description"}]},{name:"Text",key:"country",fields:[{name:"Placeholder",value:"fill commerceproduct country"},{name:"Label",value:"Country"}]},{name:"Number",key:"volume",fields:[{name:"Placeholder",value:"fill commerceproduct volume"},{name:"Label",value:"Volume"}]},{name:"Number",key:"weight",fields:[{name:"Placeholder",value:"fill commerceproduct weight"},{name:"Label",value:"Weight"}]},{name:"Text",key:"battery",fields:[{name:"Placeholder",value:"fill commerceproduct battery"},{name:"Label",value:"Battery"}]},{name:"Text",key:"power",fields:[{name:"Placeholder",value:"fill commerceproduct power"},{name:"Label",value:"Power"}]},{name:"Text",key:"atomizerType",fields:[{name:"Placeholder",value:"fill commerceproduct atomizerType"},{name:"Label",value:"AtomizerType"}]},{name:"Text",key:"warranty",fields:[{name:"Placeholder",value:"fill commerceproduct warranty"},{name:"Label",value:"Warranty"}]},{name:"Text",key:"type",fields:[{name:"Placeholder",value:"fill commerceproduct type"},{name:"Label",value:"Type"}]},{name:"Number",key:"price",fields:[{name:"Placeholder",value:"fill commerceproduct price"},{name:"Label",value:"Price"}]},{name:"Photo",key:"thumb",fields:[{name:"Label",value:"Header picture"}]},{name:"Photos",key:"thumbs",fields:[{name:"Label",value:"Detailed pictures"}]},{name:"Select",key:"tags",fields:[{name:"Placeholder",value:"fill product tag"},{name:"Label",value:"Tag"},{name:"Multiple",value:!0},{name:"Items",value:this.tags}]}]}),this.config={paginate:this.setProducts.bind(this),perPage:20,setPerPage:this._commerceproductService.setPerPage.bind(this._commerceproductService),allDocs:!1,create:()=>{this._form.modal(this.form,{label:"Create",click:(c,p)=>{this.commerce&&(c.commerce=this.commerce),this._commerceproductService.create(c),this.setProducts(),p()}})},update:c=>{this._form.modal(this.form,[],c).then(p=>{this._core.copy(p,c),this._commerceproductService.update(c)})},delete:c=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this commerceproduct?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._commerceproductService.delete(c),this.setProducts()}}]})},buttons:[{icon:"1x_mobiledata",hrefFunc:c=>"/commerce/commerceproductquantities/product/"+c._id},{icon:"cloud_download",click:c=>{this._form.modalUnique("commerceproduct","url",c)}}],headerButtons:[{icon:"playlist_add",click:this._bulkManagement(),class:"playlist"},{icon:"edit_note",click:this._bulkManagement(!1),class:"edit"}]},this.rows=[],this._page=1,this.setTags()}setProducts(e=this._page){this._page=e,this._core.afterWhile(this,()=>{this._commerceproductService.get({page:e}).subscribe(t=>{this.rows=t})},250)}getTags(e){return e.tags?.map(t=>this.tags.find(r=>r._id===t)?.name).filter(t=>t).join(", ")||"No tags"}tagIncludeCommerce(e){return e.commerce===this.commerce}tagName(e){let t=e.name;for(;e.parent;)e=this._tagService.doc(e.parent),t=e.name+" / "+t;return t}setTags(){this.tags.splice(0,this.tags.length);for(let e of this._tagService.commercetags)this.tagIncludeCommerce(e)&&this.tags.push(C(y({},e),{name:this.tagName(e)}));this.tags.sort((e,t)=>e.name<t.name?-1:e.name>t.name?1:0),this.setProducts()}replaceTagsWithIds(e){e.tags&&(e.tags=e.tags.map(t=>{let r=this.tags.find(i=>i.name==t);return r?r._id:t}))}_bulkManagement(e=!0){return()=>{this._form.modalDocs(e?[]:this.rows).then(t=>{if(e){console.log(t);for(let r of t)this.commerce&&(r.commerce=this.commerce),this.replaceTagsWithIds(r),this._commerceproductService.create(r)}else{for(let r of this.rows)t.some(i=>i._id===r._id)||this._commerceproductService.delete(r);for(let r of t){let i=this.rows.find(a=>a._id===r._id);i?(this.replaceTagsWithIds(r),this._core.copy(r,i),this._commerceproductService.update(i)):(this.commerce&&(r.commerce=this.commerce),this.replaceTagsWithIds(r),r.__created=!1,this._commerceproductService.create(r))}}this.setProducts()})}}static{this.\u0275fac=function(t){return new(t||o)(m($),m(N),m(z),m(j),m(F),m(L),m(k))}}static{this.\u0275cmp=T({type:o,selectors:[["ng-component"]],standalone:!1,decls:3,vars:3,consts:[["title","\u0422\u043E\u0432\u0430\u0440\u0438",3,"columns","config","rows"],["cell","enabled"],["cell","top"],["type","checkbox",3,"wChange","value"]],template:function(t,r){t&1&&(s(0,"wtable",0),S(1,H,1,1,"ng-template",1)(2,U,1,1,"ng-template",2),l()),t&2&&n("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[D,W,V],encapsulation:2})}}return o})();var Y=[{path:"",component:g},{path:":commerce_id",component:g}],ne=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=P({type:o})}static{this.\u0275inj=w({imports:[x.forChild(Y),E]})}}return o})();export{ne as CommerceproductsModule};
