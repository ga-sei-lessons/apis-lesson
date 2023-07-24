// required packages
const express = require("express")
const axios = require("axios")

// app config
const app = express()
const PORT = 8000
app.set("view engine", "ejs")

// routes

// display a search form on the home page
app.get("/", (req, res) => {
    res.render("home.ejs")
})

// display the results from a search
app.get("/results", async (req, res) => {
    try {
        // use the query strings provided to search the API (make api request)
        const response = await axios.get("https://swapi.dev/api/people/?search=" + req.query.search)
        // console.log(response.data)
        // pass the api response to the results template
        // res.render("results.ejs", {
        //     search: req.query.search,
        //     results: response.data.results
        // })
        res.json(response.data)
    } catch (err) {
        console.log(err)
        res.send("api error 💀")
    }
})

// listen on a port
app.listen(PORT, console.log(`fetching data on port ${PORT}`))