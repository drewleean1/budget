'use strict';

import express, { json } from 'express';
import 'dotenv/config'; 
import asyncHandler from'express-async-handler';

const app = express();

const PORT = process.env.PORT

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));


let htmlTop = `
   <!doctype html>
    <html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Andrew Lee</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <meta name="robots" content="noindex,noarchive, nofollow" />
        <link href="main.css" rel="stylesheet" type="text/css" />
        <script src='main.js'></script>
    </head>
    <body>
        <header>
            <h1>Andrew Lee</h1>
        </header>

        <nav>
            <a href="index.html">home</a> 
            <a href="contact.html">contact</a> 
            <a href="gallery.html">gallery</a>
            <a href="order.html">order</a>
            <a href="staff.html">staff</a>
        </nav>

   <main>
`

let htmlBottom = `
    </main>
    <footer><p>&copy; Andrew Lee 2023</p></footer>
    </body>
    </html>
`

app.post("/review", (req, res) => {
    const person = req.body.fullname; 
    const email = req.body.email; 
    const text_feedback = req.body.text_feedback; 
    const fav_photo = req.body.photo;
    const suggestion = req.body.suggestion; 
    let playlist = req.body.playlist;
    let merch = req.body.merch;

    if (playlist == 'on') {
      playlist = "would"
    }
    else {
      playlist = "would not"
    }

    if (merch == 'on') {
      merch = "would"
    }
    else{
      merch = "would not"
    }


    console.log(req.body);

    res.send(`
        ${htmlTop} 
        <section>
        <article>
        <p>This feedback is from ${person}. They can be contacted at ${email}.</p> 
        <p>Their favorite photo is ${fav_photo} and wish to see more photos of ${suggestion}.</p>
        <p>They ${playlist} like a link to your best Spotify playlist and ${merch} like to see you sell merchandise on your website.</p> 
        <p>They also had this to say: ${text_feedback}</p>
        </article>
        </section>
        ${htmlBottom}
        `)
});

import {products} from './products.js';

function getChoice(radio, products){
  let choice;
  if (radio == "agym"){
    choice = "AGYM"
  }
  else if (radio == "jasonwell") {
    choice = "Jasonwell"
  }
  else if (radio == "expawlorer") {
    choice = "Expawlorer"
  }
  else if (radio == "lollimeow") {
    choice = "Lollimeow"
  }
  else if (radio == "droold") {
    choice = "Drool\'d"
  }
  for (let aProduct of products){
    if (choice == aProduct.company) {
      return aProduct
    }
  }
}

app.post("/order", (req, res) => {
    const person = req.body.fullname; 
    const email = req.body.email; 
    const address = req.body.address;
    const choice = req.body.choice; 
    const quantity = req.body.quantity;
    const instructions = req.body.instructions;

    const orderedProduct = getChoice(choice, products);
    const price = orderedProduct.price; 
    const product = orderedProduct.product;

    let totalPrice = quantity*price; 

    let conPrice = totalPrice.toLocaleString('en-US', {     
      style: 'currency',     
      currency: 'USD',   
    });    


    console.log(req.body);

    res.send(`
        ${htmlTop} 
        <section>
        <h2>Your order was successful!</h2>
        <article>
        <p>Thank you ${person} for ordering ${quantity} ${product}s! You will be charged ${conPrice}. Your order will arrive in 2-5 days. We will deliver to ${address}, making sure to follow your following instructions: ${instructions}</p>
        </article>
        </section>
        ${htmlBottom}
        `)
});


app.get('/random-person', asyncHandler(async (req, res) => {
  const response = await fetch("https://randomuser.me/api/" );
  const data = await response.json();
  res.send(data);
}));

app.use((err, req, res, next ) => {
  console.error(err.stack); 
  res.status(500).send(`<h2>Error</h2><p>Please try again</p>`)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});