const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
//const winston = require('winston');
const helmet = require('helmet');
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
app.use(morgan('combined'));
app.use(helmet());
//app.use(cors());

app.get('/profile', (req, res) => {
    /*
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    */
    res.cookie('session', '1', {httpOnly: true});
    res.cookie('session', '1', {secure: true});
    
    res.set({
        'Content-Security-Policy': "script-src 'self' 'https://apis.google.com'"        
    })

    res.status(200).send('profile detected');
 });

app.post('/profile_post', (req, res) => {
   //res.send("hellooo");
   const user = {
        name: 'John',
        hobby: 'Stacking'
    };

    console.log(req.body);
    res.send(user);
});


app.listen(3000);