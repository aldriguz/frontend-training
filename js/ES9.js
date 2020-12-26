//------------------------------
//object spread operator
const animalsRanking = {
    tiger: 42,
    dog: 11,
    cat: 15,
    elefant: 24,
    bird: 2
}

function objectSpread(p1, p2, p3) {
    console.info(p1)
    console.info(p2)
    console.info(p3)
}

//new feature here 
const { tiger, elefant, ...others } = animalsRanking;

objectSpread(tiger, elefant, others)
//result will be print two first and the other is an object



//----------------------------
//finally
const urls = [
    'https://pokeapi.co/api/v2/type/3',
    'https://pokeapi.co/api/v2/type/4',
    'https://pokeapi.co/api/v2/type/5',
    'https://pokeapi.co/api/v2/type/6'
]


//it calls after whatever promise runs at the end
Promise.all(urls.map(url => fetch(url).then(sw_people => sw_people.json())))
    .then(sw_array => {
        console.info('1', sw_array[0])
        console.info('2', sw_array[1])
        console.info('3', sw_array[2])
        console.info('4', sw_array[3])
    })
    .catch(error_msg => console.error('Something failed, check your urls', error_msg))
    .finally(() => console.info('extra call finally'))


//-------------------
//for await of: looping over multiple await calls

const pokeUrls = [
    'https://pokeapi.co/api/v2/pokemon/ditto',
    'https://pokeapi.co/api/v2/pokemon/pikachu',
    'https://pokeapi.co/api/v2/pokemon/charizard'
]


//multiple urls to fetch, other syntax
const getMultipleFetch = async function() {
    try {
        const [ditto, pikachu, charizard] = await Promise.all(pokeUrls.map(url => 
            fetch(url).then(response => response.json())
        ))
        
        console.info(ditto)
        console.info(pikachu)
        console.info(charizard)
    } catch (err) {
        console.error('oops', exception)
    }
}

//remember loops
const loopingUrls = url => {
    for (url of urls ){
        console.info(url)
    }
}

const getData2 = async function(){
    const arrayOfPromises = pokeUrls.map(url => fetch(url));
    for await(let request of arrayOfPromises){
        const data = await request.json()
        console.info(data) 
    }
}



