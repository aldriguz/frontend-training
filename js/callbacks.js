el.addEventListener("click", submitForm);



//callback pyramid of doom
movePlayer(400, 'left', function(){
    movePlayer(200, 'left', function(){
        movePlayer(10, 'right', function(){
            movePlayer(330, 'left', function(){
            });
        })
    })
});


//with promises
movePlayer(400, 'left')
    .then(() => movePlayer(200, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))