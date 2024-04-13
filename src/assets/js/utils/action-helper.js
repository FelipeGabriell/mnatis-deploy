import uniqueID from"@/assets/js/utils/unique-ID.js";const m_abs=Math.abs;export default class ActionStack{constructor(){this.stack=[]}add(a){return this.stack.push(new Action(a)),this}has(a){for(var b=!1,c=this.stack.length;c--;)this.stack[c].name===a&&(b=!0);return b}remove(a){for(var b=this.stack.length;b--;){const c=this.stack[b];a.forEach(a=>{c.name===a&&this.stack.splice(b,1)})}return this}increment(){for(var a=this.stack.length;a--;){const b=this.stack[a];b.complete?this.stack.splice(a,1):b.increment()}return this}}class Action{constructor(a){this.name=a.name||uniqueID(),this.object=a.object,this.ref=a.ref,this.to=a.to,this.easing=a.easing,this.completePercent=a.completePercent,this.done=a.done,this.checkCompletion=a.checkCompletion&&"function"==typeof a.checkCompletion?a.checkCompletion:function(){var a=0,b=0;if(this.isArray){for(let c=0;c<this.to.length;c++)a+=m_abs(this.object[this.ref][c]-this.to[c]),b+=this.to[c];a/=this.to.length,b/=this.to.length}else a=m_abs(this.object[this.ref]-this.to),b=this.to;return a<=(1-this.completePercent)*b},this.isArray=this.to instanceof Array,this.complete=!1}increment(){if(!this.complete)if(this.isArray)for(let a=0;a<this.to.length;a++)this.object[this.ref][a]+=(this.to[a]-this.object[this.ref][a])*this.easing;else this.object[this.ref]+=(this.to-this.object[this.ref])*this.easing;this.checkCompletion()&&(this.complete=!0,this.done&&"function"==typeof this.done&&this.done())}get isComplete(){return this.complete}}