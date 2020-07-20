const express = require('express')
const vhost = require('vhost')

const app = express()

// app.get("/", (req, res) => {
//   res.end("Welcome to poc application")
//   // res.json({ message: "Welcome to poc application." })
// })

const one = express()
one.get("*", (req, res) => {
  res.end('Host 1')
})

const two = express()
two.get("*", (req, res) => {
  res.end('Host 2')
})

const three = express()
three.get("*", (req, res) => {
  res.end('Host 3')
})

app.use(vhost("app1", one))
app.use(vhost("app2", two))
app.use(vhost("app3", three))

app.listen(process.env.PORT || 3000 , () => {
  console.log(`Server started on PORT ${process.env.PORT || 3000}`);
})