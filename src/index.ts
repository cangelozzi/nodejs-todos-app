// Here we are going to execute the class in app.js
//TODO make sure to compile Typescript with npx tsc, after run node dist/index.js

import express from 'express'

import App from './app'

// instanciate new object from class
const app = new App()

// start app @ port 3000
app.start()
