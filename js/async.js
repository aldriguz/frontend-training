function movePlayer(move, direction, functionCallback){

    console.log("move", move);
    console.log("direction", direction);

    functionCallback();
}


//with promises (new feature JS)
movePlayer(400, 'left')
    .then(() => movePlayer(200, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))


//async await syntax
async function playerStart(){
    await movePlayer(400, 'left'); //pause until get response
    await movePlayer(200, 'left'); //pause
    await movePlayer(10, 'right'); //pause
    await movePlayer(330, 'left'); //pause
}