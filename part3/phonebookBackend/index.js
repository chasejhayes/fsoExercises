const express = require("express")
const morgan = require("morgan")

const app = express()

app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

let people = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get("/", (request, response) => {
    response.send("<h1>Phonebook</h1>")
})

app.get("/api/persons", (request, response) => {
    response.json(people)
})

const number = people.length;
const date = Date().toLocaleString()



app.get("/info", (request, response) => {
    response.send(`<p>The Phonebook has ${number} people.</p>
    <p>${date}</p>`
    )

})

app.get("/api/people/:id", (request, response) => {
    const id = request.params.id
    const person = people.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/people/:id", (request, response) => {
    const id = request.params.id
    people = people.filter(person => person.id !== id)

    response.status(204).end()
})

function getID(min, max){
    return Math.random() * (max - min) + min
}
function generateID(){
    return String(Math.floor(getID(1, 1000)))
}

app.post("/api/people", (request, response) => {
    const body = request.body


    if (!body.number && !body.name){
        return response.status(400).json({
            error: "Missing name and number"
        })
    }
    else if (!body.name){
        return response.status(400).json({
            error: "Missing name"
        })
        
    }
    else if (!body.number){
        return response.status(400).json({
            error: "Missing number"
        })
    }
    else if (people.find(person => person.name ===body.name)){
         return response.status(400).json({
            error: "Already in phone book"
        })
    }
    // const person = people.find(person => person.id === id)
    
    
    const person = {
        name: body.name,
        number: body.number,
        id: generateID()

    }

    people = people.concat(person)



    // console.log(person)
    response.json(person)
})

 

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server running")
})




// Server/fullstack notes
/*
Previously we used json-server as backend and data was at localhost:3001/data
Now we use express and it's at localhost:3001/api/data


First change the baseUrl in the frontend (because the backend is in a different location now)

In order to allow requests from a different origin, install cors in the backend.
npm install cors
const cors = require('cors')
app.use(cors())

Use 'Render' to move application to the internet 

Change the port defintion in the index.js backend:
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
    })

On 'Render' create a new "web service" and connect the backend Github repo 
Build command = npm install
Start command = npm start

React is being run in "development mode"
Now we must create a "production build"

In the frontend, run "npm run build"
This creates a directory called 'dist' containing a minified version of the code
Copy the dist directory to the root of the backend
Make Express show static content using the built-in middleware 'static'
Add to the declarations of middlewares: 
app.use(express.static("dist"))

Now the frontend and backend are at the same address
baseUrl can be relative (delete the part declaring the server): const baseUrl = "/api/data"
Since that is a frontend change, create/copy a new production build 'dist' directory 

Now move the whole app to the host service:
Commit changes and push to github, should update automatically

How to create a production build with fewer steps:
Add:
{
  "scripts": {
    //...
    "build:ui": "rm -rf dist && cd ../frontend && npm run build && cp -r dist ../backend",
    "deploy:full": "npm run build:ui && git add . && git commit -m uibuild && git push"
  }
}
Must be edited to account for where the frontend and backend are relative to one another in the file system

Changes no longer work in development mode because the backend address was changed to a relative URL (go to frontend/5173 instead of 3001)
Fix: add following to vite.config.js - 
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  },
Acts as a proxy. Sends /api requests to 3001, all others continue as normal

Because everything is on the same host, CORS can be removed.



Aside about Same origin policy and CORS:

Steps explaining cross-origin requests -
Visit a website
Browser issues a request to the server where the website is hosted
Server sends a response as an HTML file which may contain refereces to external assets or resources
Browser sees those references to URLs in the HTML
Browser issues another request
If refernces are hosted outside the original website, browser must check the "Access-Control-Allow-origin" response header
If it contains * on the URL of the source HTML it will process, otherwise it will error

Same-origin policy - a security mechanism used by browsers in order to prevent session hijacking, etc

CORS was invented to enable legitimate cross-origin requests

By default JS can only communicate with a server in the same origin

We can allow requests from other origins by using Node's cors middleware
*/