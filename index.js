

const fetchPeople = async ()=>{
    const data = await fetch('https://swapi.dev/api/people');
    const json = await data.json();
     console.log(json);

      const users = json.results

 const contain = document.querySelector(".container")
 users.forEach( user => {
    contain.innerHTML +=`
    <div class="stylezz">
     <h3 class="name">${user.name}</h3>
     <h3>${user.height}</h3>
     <h3>${user.mass}</h3>
     <h3>${user.hair_color}</h3>
     <h3>${user.skin_color}</h3>
     <h3>${user.gender}</h3>
    </div>
    `
    
 });
}
fetchPeople()


const myBody = document.querySelector("body")
const button = document.querySelector(".btn")
const toggleDarkMode =()=>{
   myBody.classList.toggle("dark")
}

button.addEventListener("click", toggleDarkMode)