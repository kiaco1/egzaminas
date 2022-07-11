/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const displayUsers = (data) => {
console.log(data.login);
data.forEach(user => {
    const div = document.createElement("div");
    div.className = "users"
    div.textContent = `Login: ${user.login} avatar_url: ${user.avatar_url}`;
    document.getElementById("output").appendChild(div);
})
}

const fetchUsers = async () => {
    try {
        const response = await fetch("https://api.github.com/users");
        if (response.ok){
            const data = await response.json();
            displayUsers(data);
        }
    } catch (error) {
        console.error (error);
    }
};
document.querySelector("#btn").addEventListener("click", () => {
    fetchUsers();
})
