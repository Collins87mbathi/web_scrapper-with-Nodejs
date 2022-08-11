const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT  = 5000;

const url = 'https://www.the-star.co.ke/';

axios(url).then((response)=> {
 const resources = response.data
 const $ =  cheerio.load(resources);
 const articles = [];

 $('.row', resources).each(function() {
    const title = $(this).text();
    const url = $(this).find('a').attr('href');
    const img = $(this).find('img').attr('src');

    articles.push({title,url,img});
 })
console.log(articles);
}).catch((err)=> {
 console.log(err);
})



//listen
app.listen(PORT, ()=> {
    console.log(`the server is listening AT ${PORT}`);
})