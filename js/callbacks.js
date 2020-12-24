//once user clicks on el (element) then submitForm will be executed
el.addEventListener("click", submitForm);

function movePlayer(move, direction, functionCallback){

    console.log("move", move);
    console.log("direction", direction);

    functionCallback();
}

//callback pyramid of doom
movePlayer(400, 'left', function(){
    movePlayer(200, 'left', function(){
        movePlayer(10, 'right', function(){
            movePlayer(330, 'left', function(){
            });
        })
    })
});


/*
move 400
direction left
move 200
direction left
move 10
direction right
move 330
direction left
*/



//with promises (new feature JS)
movePlayer(400, 'left')
    .then(() => movePlayer(200, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))