var unirest = require('unirest')

function name_starts_with(client, letter) {
    return client.filter(client => client.name[0] == letter)
}

var req = unirest('GET', 'http://localhost:3000/client').headers({
    "cache-control": "no-cache" 
}).then((res) => {
    if (res.error) throw new Error(res.error)
    var first_10_client = res.body.slice(0, 10)
    console.log("FIRST 10 CLIENT:\n")
    console.log(first_10_podcasts)
    console.log("\n\n\n\n")
    console.log("CLIENT THAT START WITH THE LETTER M:\n")
    console.log(name_starts_with(res.body, "M"))
