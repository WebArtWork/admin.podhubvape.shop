import{Fb as c,H as o}from"./chunk-74RVS7D4.js";var i=(()=>{class t extends c{constructor(){super({name:"commercetag"}),this.commercetags=this.getDocs(),this.commercetagsByAuthor={},this.commercetagsByCommerce={},this.commercetagsByParent={},console.log(this),this.get(),this.filteredDocuments(this.commercetagsByAuthor),this.filteredDocuments(this.commercetagsByCommerce,"commerce",e=>!e.parent,(e,r)=>e.order-r.order),this.filteredDocuments(this.commercetagsByParent,"parent",e=>!!e.parent,(e,r)=>e.order-r.order)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{i as a};
