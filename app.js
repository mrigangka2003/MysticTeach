require("dotenv").config()

const express = require('express') ;
const connectDB = require("./config/db") ;
const app = express() ;
const port = process.env.PORT
const passport = require('passport') ;
const session = require('express-session') ;
const localStrategy = require('passport-local').Strategy ;
const isLoggedIn = require('./middleware/isLoggedIn')


//connecting database here
connectDB() ;


//to converting file in json 
app.use(express.json()) ;
app.use(express.urlencoded({extended:true}))


//setting up express-session
app.use(session({
    secret:"ahehehe",
    resave: false ,
    saveUninitialized: false ,
})) ;


app.use(passport.initialize()); //initializing the passport js 
app.use(passport.session());  //this line of code allows passport to integrate with express session


app.use(express.static("public")); //static files
app.set("view engine", "ejs") ; //setting up view engine 





//routes
app.use('/' , require('./routes/auth'));
app.use('/' , require('./routes/index'));

app.get('/',isLoggedIn,(req,res)=>{
    res.json("do anything")
})

app.listen(port,()=>{
    console.log(`You are now connected to the port ${port} http://localhost:5000`) ;
})