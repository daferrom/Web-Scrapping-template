const PORT = 8000
const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio')

const app = express()

app.get('/',(req , res)=>{
    res.json('Welcome to Artificial Intelligence API')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))