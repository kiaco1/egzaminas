/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function addDiv() {


}

document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const mass = document.getElementById("search").value;
    const div0 = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div0.textContent = "Svarai (lb): " + mass * 2.2046;
    div1.textContent = "Gramai (g): " + mass / 0.0010000;
    div2.textContent = "Uncijos (oz) " + mass * 35.274;
    const output = document.getElementById("output");
    output.appendChild(div0);
    output.appendChild(div1);
    output.appendChild(div2);
    div0.className = "style";
    div1.className = "style";
    div2.className = "style";
})