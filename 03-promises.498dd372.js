function e(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const o=document.querySelector(".form"),t=o.querySelector('[name="delay"]'),n=o.querySelector('[name="step"]'),l=o.querySelector('[name="amount"]');o.addEventListener("submit",(o=>{o.preventDefault();const r=parseInt(t.value),a=parseInt(n.value),s=parseInt(l.value);for(let o=0;o<s;o++){e(o+1,r+o*a).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.498dd372.js.map
