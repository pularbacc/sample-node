
const login = require("./auth/login");
const user = require("./auth/user");

const GET = () => {
    return { data: "Hello world , SERVER work" }
}


module.exports = {
    "/": { GET: GET },
    "/auth/login":login,
    "/auth/user":user
};