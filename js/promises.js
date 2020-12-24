//test this in console
const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke');
    }
});

//run this to see in work
promise.then(result => console.log(result));


//chaining promises, check it in console!!
promise
    .then(result => result + '!')
    .then(result2 => {        
        console.log(result2);
    });


//with errors before others
promise
    .then(result => {
        throw Error
        return result + '!'
    })
    .then(result2 => {        
        console.log(result2);
    })
    .catch(() => console.log('error ps!'));



//when error happens after, chat only runs when an error is before
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error ps!'))
    .then(result3 => console.log(result3 + '!'));


//when error happens after, chat only runs when an error is before
promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error ps!'))
    .then(result3 => console.log(result3 + '!'));


//setTimeOut promises, run promises all at once
const promiseTO = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII');
});

const promiseTO2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'POOKIE');
});

const promiseTO3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'THIS IS IT!!');
});

Promise.all([promiseTO, promiseTO2, promiseTO3])
    .then(values => console.log(values));



//this promise will return an object    
let myPromiseObject = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({success: true});
    }, 200);
});


myPromiseObject.then((success) => {
    console.log(success);
});



// here we call multiple urls though mapping and then fetch all, and get results
// promises will success or fail once

// https://jsonplaceholder.typicode.com/todos/1
const urls = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.warn('Can´t reach the api, check the urls!!'));


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))