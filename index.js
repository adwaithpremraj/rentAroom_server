//import json server library

const jsonServer = require('json-server')

//create server using create function

const rentAroomServer = jsonServer.create()

//create path for db.json file
const router = jsonServer.router('db.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()

//connecting

rentAroomServer.use(middleware)
rentAroomServer.use(router)

//setup port process env.PORT beccoz if we host it wil clash sp if we use proccess.env.port it will give a port to store 
const port = 4060 || process.env.PORT


//run server
rentAroomServer.listen(port,()=>{
    console.log('rent a room running successfully');
})