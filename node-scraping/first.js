const cheerio = require('cheerio'); 
const axios = require('axios'); 

// axios.get('https://www.google.com/')
//     .then((response) => console.log(response.data))
//     .catch((err) => console.log(error))


//ebay axios call 
// var query = process.argv[2]; 
var queryUrl = 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR11.TRC2.A0.H0.Xcanon.TRS1&_nkw=canon&_sacat=0'
// console.log(queryUrl)
//get request to ebay-canon page 
axios.get(queryUrl)
    //response
    .then((response) => 
    {
        //putting data into cheerio instance 
        const $ = cheerio.load(response.data)
        //divs I want 
        const urlElems = $('div.s-item__info.clearfix')
        // console.log(urlElems); 
        //for loop to go through array of divs i want
        for (var i = 0; i < urlElems.length; i++) {
            const urlSpan = $(urlElems[i]).find('h3.s-item__title.s-item__title--has-tags')
            if (urlSpan) {
                // We wrap the span in `$` to create another cheerio instance of only the span
                // and use the `text` method to get only the text (ignoring the HTML)
                // of the span element
                const urlText = $(urlSpan).text()
                // console.log(urlText)
                // We then print the text on to the console
                console.log(urlText)
        } else {
            console.log("doesn't exist")
        }
    }})
    // .catch((err) => console.log(err)) 

    