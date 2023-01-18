var exp = require('express');
var app = exp();
var mongodb = require('mongodb').MongoClient;
// var mongoose=require('mongoose');
var path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
var bcrypt = require('bcryptjs');

var dbo;
//mongosh "mongodb+srv://vijay777:kumar777@cluster0.6tddyjg.mongodb.net/myFirstDatabase" --apiVersion 1 --username vijay7181
mongodb.connect('mongodb+srv://vijay777:kumar777@cluster0.6tddyjg.mongodb.net/onlineexamportal', (err, res) => {
    app.use(exp.static(path.join(__dirname, 'dist/oep')));
    if (err) throw err;
    dbo = res.db('onlineexamportal');
    console.log('database connected');
});

//register
app.post('/register', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.password);
    dbo.collection('register').find({ username: req.body.username }).toArray((err, data) => {

        if (err) {
            console.log('Error occured,please recheck again')
        }

        else if (data.length === 0) {
            // console.log(req.body.password);
            bcrypt.hash(req.body.password, 10, (err, hashcode) => {
                if (err) {
                    console.log('err')
                }
                else {
                    console.log('data')
                    dbo.collection('register').insertOne({
                        firstname: req.body.firstname,
                        middlename: req.body.middlename,
                        lastname: req.body.lastname,
                        mail: req.body.mail,
                        phone: req.body.phone,
                        role: req.body.role,
                        username: req.body.username,
                        password: hashcode
                    }, () => {
                        res.json("registered successfully")

                    })
                }
            })
        }
        else {
            res.json("username already existed....choose another name");
        }
    })

})


//LOGIN
var username;
app.post('/home/login', (req, res) => {
    console.log(req.body);
    dbo.collection('register').find({ username: req.body.username }).toArray((err, data) => {
        if (err) throw err;
        console.log(data.length);
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, ((err, success) => {
                console.log(success)
                if (err) throw err;
                if (success === true) {
                    username = data[0].username;
                    if (data[0].role == "admin") {

                        res.send({ 'msg': "admin" })
                    }
                    else {
                        res.send({ 'msg': "user" })
                    }
                }
            }))
        }
        else {
            res.send({ 'msg': "Invalid Username or Password" })
        }
    })

})


//post methods
app.post('/question', (req, res) => {
    console.log(req.body);
    dbo.collection('question').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})

app.post('/userc1/addquestion', (req, res) => {
    console.log(req.body);
    dbo.collection('userc1questions').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})
app.post('/adminc1/question', (req, res) => {
    console.log(req.body);
    dbo.collection('adminc1questions').insertOne(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})



//get methods


app.get('/userc1/question', (req, res) => {
    dbo.collection('question').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/usercpp1/question', (req, res) => {
    dbo.collection('usercpp1').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/profiledata', (req, res) => {
    dbo.collection('register').find({username:username}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})




// app.listen(8080, () => {
//     console.log('server listing to port 8080')
// });
var portno = process.env.PORT || 8080;
app.listen(portno, ()=>{
    console.log(`server listing to port on ${portno}`)
})