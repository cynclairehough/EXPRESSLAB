const portfolioPage = []

const express = require('express')
const bodyParser = require("body-parser")
const router=express.Router()
//const portfolioRouter = require("./routes/portfolioRouter")

require("dotenv").config()

//Create Servers

const server = express()

const PORT = process.env.PORT || 3000

//middleware
server.use(bodyParser.json())


// Set Routes

// GET method route
app.get('/', (req, res,next) => {
    res.send('GET request to the homepage')
  })

router.get("/",(req,res,next)=>{
    res.send("This is the homepage request")
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res,next) => {
    res.send('hello world')
  })

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

router.get("/",(req,res,next)=>{
    res.send("This is the login request")
})

//server.use("/portfolio", blogRouter)

//make a test endpoint
// ROUTE => localhost:3000/ (get)

server.get("/", (req, res)=>{
    res.status(200).json({message: "Successful"})
})

app.get('/', (req, res) => {
    res.send('root')
  })

  app.get('/about', (req, res) => {
    res.send('about')
  })

  app.get('/random.text', (req, res) => {
    res.send('random.text')
  })

  app.get('/resume', (req, res) => {
    res.send('resume')
  })


  app.get('/contact', (req, res) => {
    res.send('contact')
  })
  
//make it listen

server.listen(PORT, ()=>{
    console.log(`Working: Port ${200}`)
})


module.exports=router