const express = require('express');
//import express from 'express';
//import bodyParser from 'body-parser';

const app = express();
const port  = process.env.PORT || 3000;
const importData = require("./data.json");

app.get("/", ( req, res ) => {
    res.send("Hello API");
});

app.get("/projects", ( req, res ) => {
    res.send( importData );
})

app.listen( port, ( ) => {
    console.log(`App Listeing on http://localhost:${ port }`);
});