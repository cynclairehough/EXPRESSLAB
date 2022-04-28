const app = express()

app.get("/", (req, res) => {
    console.log('Welcome to my Portfolio Page')
    res.status('200')
})

app.listen(3000)

const portfolioPage = []

//create routes

const express = require("express")

// CAPITAL R!!!
const portfolioRouter = express.Router()

// SET UP ROUTES
//localhost:3000/portfolio

/**
 * / = GET => Return ALL data
 * / = POST =>  Create => TAKE a post, return SAME POST AFTER adding it to the database
 * /:id = GET => Return blog that has that id (idx)
 * /:id = PUT => UPDATE => Take a post & param, return CHANGED post
 * /:id = DELETE => take param, DELETE from database, return 204 + message "Post Successfully Deleted"
 * 
 */

Router.route("/")
.get((req, res)=>{
    res.status(200).json({portfolio: portfolioPage})
})
.post((req, res)=>{
    // take a form
    const body = req.body

    portfolioPage.push(body)
    // respond with the added thing
    //201 === CREATED
    res.status(201).json({portfolio: portfolioPage[fakeBlogData.length-1]})
})
// function blogRoute(id)
// blogRoute(12)
// "/:id"
//www.portfoliopage.com/portfolio/12
portfolioRouter.route("/:id")
.get((req, res)=>{
    const id = req.params.id
    if(id >= portfolioPage.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        res.status(200).json({portfolio: portfolioPage[id]})
    }
})
.put((req, res)=>{
    /**\
     * form:
     * name: "",
     * textContent: ""
     */
    const body = req.body
    const id = req.params.id
    // 200s => USER DID GOOD
    // 400s => USER DID BAD
    // 500s => OOPS PROBABLY ME
    if(body.name.length <= 8 || body.name.length > 20){
        res.status(400).json({message: "Username must exceed 8 characters"})
    }
    else if(body.textContent.length <= 200 || body.textContent.length > 500){
        res.status(400).json({message: "Text must be between 200 & 500 characters"})
    }

    else if(id >= portfolioPage.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        portfolio[id] = body
        res.status(202).json({portfolio: portfolioPage[id]})
    }
})
.delete((req, res)=>{
    const id = req.params.id
    if(id >= portfolioPage.length){
        res.status(404).json({message: "ID Doesn't Exist"})
    }else{
        portfolioPage.splice(id, 1)
        res.status(204).json({message: "Succesfully Deleted"})
    }
})

// DONT FORGET TO EXPORT
module.exports = portfolioRouter

