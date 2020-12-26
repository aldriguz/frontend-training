function movePlayer(move, direction, functionCallback){

    console.log("move", move);
    console.log("direction", direction);

    if(functionCallback !== undefined)
        functionCallback();
}


//with promises (new feature JS)
movePlayer(400, 'left')
    .then(() => movePlayer(200, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))


//async await syntax
async function playerStart(){
    const first = await movePlayer(400, 'left'); //pause until get response
    const second = await movePlayer(200, 'left'); //pause
    const third = await movePlayer(10, 'right'); //pause
    const fourth = await movePlayer(330, 'left'); //pause
}


//real examples (first with fetch)
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

fetch('https://pokeapi.co/api/v2/type/3')
  .then(response => response.json())
  .then(json => console.log(json))

// here the same, but looks cleaner
async function getPokemonType() {
    const response = await fetch('https://pokeapi.co/api/v2/type/3')
    const data  = await response.json();
    console.log(data);
}


const pokeUrls = [
    'https://pokeapi.co/api/v2/pokemon/ditto',
    'https://pokeapi.co/api/v2/pokemon/pikachu',
    'https://pokeapi.co/api/v2/pokemon/charizard'
]


//multiple urls to fetch, other syntax
const getMultipleFetch = async function() {
    try{
        const [ditto, pikachu, charizard] = await Promise.all(pokeUrls.map(url => 
            fetch(url).then(response => response.json())
        ))
        
        console.info(ditto)
        console.info(pikachu)
        console.info(charizard)
    }catch(exception){
        console.error('oops', exception)
    }
}