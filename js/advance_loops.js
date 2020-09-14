const sports = ['basket', 'soccer', 'futbol', 'tennis'];
const my_favorite = 'soccer';
const detailedSports = {
    basket: 10,
    soccer: 30,
    futbol: 20,
    tennis: 5
}

//for with index i
for (let index = 0; index < sports.length; index++) {
    console.log(sports[index]);    
}

//forEach
sports.forEach(element => {
    console.log(element);
});


//for of
//Iterating - arrays, strings
for( item of sports){
    console.log(item);
}
for( item of my_favorite){
    console.log(item);
}


//for in
//Enumerating - objects
for (const key in detailedSports) {
    //console.log(key);
    console.log(detailedSports[key]);
}
