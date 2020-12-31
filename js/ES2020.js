//Promise.allSettled performs all the promises even if one fails

const promiseRight = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII');
});

const promiseFail = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'POOKIE');
});

//will go to catch
Promise.all([promiseRight, promiseFail])
    .then(values => console.log(values))
    .catch(e => console.error(e));


//new feature, this shows all promises and 
Promise.allSettled([promiseRight, promiseFail])
    .then(values => console.log(values))
    .catch(e => console.error(e));


//globalThis is a new alias of the instance, alid outside the browser

window.console.error('Fatal!!') //valid
globalThis.console.error('Fatal!!') //also valid in browser & node
global.console.error('Fatal!!') //node valid

