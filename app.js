const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003

app.get('/', (req, res) => {
    res.send('THIS IS MY LAB')
})
//1
app.get('/terminator', (req, res) => {
    res.send(`I'll be back`)
})
app.get('/terminator2', (req, res) => {
    res.send(`Hasta la vista, baby`)
})
//2
app.get('/emeril', (req, res) => {
    res.send(`Bam!`)
})
//3
app.get('/steve-mcgarrett', (req, res) => {
    res.send(`Book 'em Danno!`)
})
//4
app.get('/coach-taylor', (req, res) => {
    res.send(`Clear eyes, full hearts, can't Lose`)
})
//5
app.get('/homer-simpson', (req, res) => {
    res.send(`D'Oh`)
})
//6
app.get('/bruce-banner', (req, res) => {
    res.send(`Don't make me angry`)
})
//7
app.get('/jj-evans', (req, res) => {
    res.send(`Dy-no-myte!`)
})
//8
app.get('/batman', (req, res) => {
    res.send(`To the Batmobile!`)
})
//9
app.get('/hannibal-smith', (req, res) => {
    res.send(`I love it when a plan comes together`)
})



app.get('/magic8', (req, res) => {

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
    res.send(`${magic8Responses[Math.ceil(Math.random() * magic8Responses.length)]}`)
})




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})