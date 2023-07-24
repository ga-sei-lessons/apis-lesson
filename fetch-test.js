const fetch = require("node-fetch")
const axios = require("axios")

const baseUrl = "https://swapi.dev/api"

// list of sw people w dot then
// wait for the data payload -- this is async
// fetch(baseUrl + "/people/")
//     .then(rawResponseData => {
//         console.log("raw response data:", rawResponseData)
//         // convert the data payload into the kind of data we want -- this is async
//         return rawResponseData.json() // return a promise so we can do then again
//     })
//     .then(starWarsData => {
//         console.log(starWarsData) // info the API sent to us
//     })
//     .catch(console.error) // invoke a callback if there is an error

// using axios
axios.get(baseUrl + "/people/?search=leia")
    .then(response => {
        // console.log(response) // meta informtation about the request and response
        console.log(response.data) // what the api sent back
    })
    .catch(console.error)

// people w async await