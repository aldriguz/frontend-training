const express = require('express');

const app = express();

/*
    //middlewares in express
app.use((req, res, next) => {
    console.log('hi');
    next(); //by running this we will continue with execution
});
*/

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/profile', (req, res) => {
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);

    res.status(500).send('profile detected');
 });

app.post('/profile', (req, res) => {
   //res.send("hellooo");
   const user = {
        name: 'John',
        hobby: 'Stacking'
    };

    console.log(req.body);
    res.send(user);
});


app.listen(3000);