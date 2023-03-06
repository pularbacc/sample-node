const http = require('http');
const controller = require("./controllers");
const config = require("./configs/server.config");

const run = () => {
    const server = http.createServer((clientReq, clientRes) => {
        console.log("--")
        try {
            controller({clientReq,clientRes});
        } catch (error) {
            console.log(error);
        }
    })
    server.listen(config.port, config.hostname, () => {
        console.log(`Server running at http://${config.hostname}:${config.port}/`);
    })
}

module.exports = run;