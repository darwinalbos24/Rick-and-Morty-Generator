// Assigning variables
let button = document.querySelector('#button')
let characterName = document.querySelector('#character-name')
let picture = document.querySelector('#picture')
let h1 = document.querySelector('#title')

// Event
button.addEventListener('click', displayInfo)

// Functions

function displayInfo() {
    
    let randomNumber = (Math.floor(Math.random() * 671) + 1)

    let newUrl = 'https://rickandmortyapi.com/api/character/' + randomNumber

    fetch(newUrl)
    .then(function(response) {return response.json()})
    .then(function(data) {insertInfo(data)})
}

function insertInfo(data) {
    h1.innerHTML = ""
    picture.innerHTML = `<img src=${data.image}></img>`
    characterName.innerHTML = `
    ${data.name}<br> 
    <h4>Gender: ${data.gender}</h4> 
    <h4>Species: ${data.species}</h4> 
    <h4>Status: ${data.status}</h4>
    <h4>Place of Origins: ${data.origin.name}</h4>
    `  
}