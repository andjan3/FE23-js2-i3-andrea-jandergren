async function e(e){try{let t=`https://dummyjson.com/products/search?q=${e}`,n=await fetch(t);if(!n.ok)throw Error(`Failed to fetch data: ${n.statusText}`);let r=(await n.json()).products||[];if(0!==r.length)return r;{let e=document.createElement("h1");return e.innerText="No results found. Check if your spelling is correct and try again!",document.body.append(e),[]}}catch(e){return!function(e){let t=document.createElement("h1");404===e.status?t.innerText="No results found. Check if your spelling is correct and try again!":t.innerText="Something went wrong. Try again later!",document.body.append(t)}(e),[]}}const t=document.querySelector("form");t.addEventListener("submit",n=>{n.preventDefault(),e(document.getElementById("searchInput").value).then(e=>{!function(e){let t=document.querySelector("#productsContainer");t.innerHTML="",e.forEach(e=>{(function({images:e,title:t,description:n,rating:r,stock:o,category:c},a){let d=document.querySelector("h1");document.body.contains(d)&&d.remove();let i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("h2"),m=document.createElement("h3"),p=document.createElement("p"),h=document.createElement("p"),y=document.createElement("p"),f=document.createElement("button");if(i.classList.add("productCard"),s.classList.add("headingDiv"),l.classList.add("productInfoDiv"),h.classList.add("stockEl"),y.classList.add("categoryEl"),e.length>0){let t=document.createElement("img");t.src=e[0].trim(),i.appendChild(t)}u.innerText=t,m.innerText=n,y.innerText=`Category: ${c}`,p.innerHTML=`<i class="fa-solid fa-star" style="color: #FFD43B;"></i>  ${r.toString()}`,o<10?(h.innerText=`Stock: Almost sold out. Only ${o} left.`.toString(),h.classList.add("stockElChangeColor")):h.innerText=`Stock: ${o}`.toString(),f.innerText="Buy",f.innerHTML='<span><i class="fi fi-rr-shopping-cart-add buyIcon"></i> Buy </span>',s.append(u,p),l.append(h,y,f),i.append(s,m,l),a.appendChild(i)})(e,t)})}(e)}),t.reset()});
//# sourceMappingURL=index.9a6a2a8b.js.map