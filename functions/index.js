const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('pk_test_51Le1jMSCilcYE4NJZL0o1lJiqGQGwkCA608aChz408RlpzILhcTHmlMHjSiXjogmByWTpCJNVAEPyMXOhu4yBIkx00uAQdpGre')

//API

// App config
const app = express()

// Middlewares
app.use(cors({origin:true}))
app.use(express.json())

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

// app.get('/', (request, response) => response.status(200).send('namaste world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('payment receive', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, //subunits of the currencey
        currency: "inr"
    })

    //ok created
    response.status(201).send({
        clientSecret: paymentIntent.cli
    })
})


//Listen command
express.api = functions.https.onRequest(app)