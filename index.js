// import json-server library
const jsonServer=require('json-server')

// create server using create function
const hostelServer=jsonServer.create()

// create path for db.json file
const router=jsonServer.router('db.json')

// create middleware to convert json into js
const middleware=jsonServer.defaults()

// connect 
hostelServer.use(middleware)
hostelServer.use(router)

// setup port
const PORT=4001 || process.env.PORT

// run the server
hostelServer.listen(PORT,()=>{
    console.log('server is running successfully');
})