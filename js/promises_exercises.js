// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

let _4seconds = new Promise((resolve, rejected) => {
    setTimeout(function(){
        resolve("success");
    }, 4000);
});

// #2) Run the above promise and make it console.log "success"
_4seconds.then((success) => {
    console.info(success);
});


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const _promiseResolved = Promise.resolve(
    setTimeout(() => console.log('success'), 4000)
);


//run the promise
_promiseResolved.then(console.info);

//or

_promiseResolved.then(resp => console.warn(resp));


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => {
    console.error('Ooops something went wrong')
})

//or

Promise.reject('failed').catch(console.error('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://pokeapi.co/api/v2/type/3',
  'https://pokeapi.co/api/v2/type/4',
  'https://pokeapi.co/api/v2/type/5',
  'https://pokeapi.co/api/v2/type/6'
]

Promise.all(urls.map(url => fetch(url).then(sw_people => sw_people.json())))
    .then(sw_array => {
        console.info('1', sw_array[0])
        console.info('2', sw_array[1])
        console.info('3', sw_array[2])
        console.info('4', sw_array[3])
    })
    .catch(error_msg => console.error('Something failed, check your urls', error_msg));

//error
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls = [
    'https://pokeapi.co/api/v2/type/3',
    'https://pokeapi.co/api/v2/type/4',
    'https://pokeapi.co/api/v2/type/5',
    'https://pokeapi.co/api/v/type/6'
  ]

Promise.all(urls.map(url => fetch(url)
                            .then(sw_people => {
                                    //console.log(sw_people.headers.get("content-type"))
                                    if(sw_people.status !== 200)
                                        return sw_people.json()
                                    else                                        
                                        throw Error //console.log(sw_people.status)  
                                })))
    .then(sw_array => {
        console.info('1', sw_array[0])
        console.info('2', sw_array[1])
        console.info('3', sw_array[2])
        console.info('4', sw_array[3])
    })
    .catch(error_msg => console.error('Something failed, check your urls', error_msg));
