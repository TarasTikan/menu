import{g as p,l as g,a as b}from"./loader-DDeYnoZy.js";function o(e){const s=document.querySelector(e);if(!s)throw new Error(`Element with selector "${e}" not found.`);return s}const l=o(".select-desserts"),i=o(".form-calculation"),m=o(".wrap-card"),$=()=>{const e=p()||[];if(e.length===0)return l.insertAdjacentHTML("afterbegin",'<option value="Рецептів не знайдено">Рецептів не знайдено</option>');l.insertAdjacentHTML("afterbegin",e.map(s=>`<option value="${s.diametrDessert}" id="${s.index}">${s.desertName}, діаметр рецепту: ${s.diametrDessert} см </option>`).join(""))},v=e=>{m.innerHTML="",m.insertAdjacentHTML("afterbegin",`
        <div class="dessert-card">
          <h1 class="dessert-card-title">${e.desertName}</h1>
          <p class="dessert-diametr-text">Діаметр форми у рецепті: <strong>${e.diametrDessert} см </strong></p>
          <ul class="recipe-list">
            ${e.recipeGroup.map(s=>`
                <li class="recipe">
                  <h2 class="recipe-title">${s.recipeName}</h2>
                  <p class="recipe-subtitle">Інгредієнти:</p>
                  <ul class="ingredients-list">
                    ${s.recipeIngredienst.map(r=>`<li class="ingredients-list-item"><p class="ingredients-list-text">${r.ingredients} - ${r.numb} г.</p></li>`).join("")}
                  </ul>
                </li>
              `).join("")}
          </ul>
          ${e.notes?`<p class="describe-dessert"><strong>Нотатки:</strong> ${e.notes}</p>`:'<p class="describe-dessert"><strong>Нотатки:</strong> Немає нотаток</p>'}
        </div>
      `)},N=[8,10,12,14,16,18,20],h={8:[1,.65,.45,.3,.25,.2,.16],10:[1.55,1,.7,.5,.4,.3,.25],12:[2.25,1.5,1,.7,.6,.44,.4],14:[3,2,1.4,1,.77,.6,.5],16:[4,2.55,1.8,1.3,1,.8,.65],18:[5,3.25,2.25,1.65,1.3,1,.8],20:[6.25,4,2.8,2,1.55,1.25,1]},I=e=>{e.preventDefault();const s=p();if(!s)return;const r=Number(i.elements.namedItem("diametrDessertNeed").value),c=i.elements.namedItem("diametrDessert"),u=c.selectedOptions[0],f=N.findIndex(t=>t===Number(c.value)),n=s.find(t=>t.index===Number(u.id)),D=h[r][f];if(!n)return;const a={...n,diametrDessert:r,recipeGroup:n.recipeGroup.map(t=>({...t,recipeIngredienst:t.recipeIngredienst.map(d=>({...d,numb:String((Number.parseInt(d.numb)*D).toFixed(1))}))}))};a&&v(a)};window.addEventListener("load",g);i.addEventListener("submit",I);$();b();
