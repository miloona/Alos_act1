var unirest = require('unirest')

function name_starts_with(trip, letter) {
    return client.filter(trip => trip.name[0] == letter)
}

var req = unirest('GET', 'http://localhost:3000/trip').headers({
    "cache-control": "no-cache" //Q3:"response" peut ètre stocké dans le cache si validé par le serveur d'origine, mème si "response" est non-cacheable
}).then((res) => {
    if (res.error) throw new Error(res.error)
    var first_10_trip = res.body.slice(0, 10)
    console.log("FIRST 10 CLIENT:\n")
    console.log(first_10_podcasts)
    console.log("\n\n\n\n")
    console.log("TRIP THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
