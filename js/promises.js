const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('Stuff Worked');
    }else {
        reject('Error, it broke');
    }
});


promise
    .then(result => {
        throw Error;
        return result + '!';
    })
    .then(result2 => {
        throw Error;
        console.log(result2);
    })
    .catch(() => console.log('Error!!'));


//this promise will return an object    
let myPromiseObject = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({success: true});
    }, 200);
});


myPromiseObject.then((success) => {
    console.log(success);
});