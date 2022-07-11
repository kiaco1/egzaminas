/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const populateTable = (data) =>{

    data.forEach(user => {
    const div = document.createElement("div");
    div.className = "users"
    div.textContent = `Brand: ${user.brand} ||  model: ${user.models}`;
    document.getElementById("output").appendChild(div);
});

};
async function fetchData() {
    try {
      let response = await fetch('cars.json');
      if (response.ok) {
        data = await response.json();
        populateTable(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData();