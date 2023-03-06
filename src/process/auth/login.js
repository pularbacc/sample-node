const db = require("../../db/db");
const Base64 = require("../../modules/base64");


const POST = async ({ data }) => {
    const qId = await db.query("select Id from User where Email = ?", data.email);
    if (qId[0] == undefined) {
        return {
            err: {
                status: 400,
                message: "Not find email"
            }
        }
    }

    const qPass = await db.query("select Password from Auth where UserId = ?", qId[0].Id);
    if (qPass[0] == undefined) {
        return {
            err: {
                status: 500,
                message: "Can't check User"
            }
        }
    }
    if (data.password != qPass[0].Password) {
        return {
            err: {
                status: 400,
                message: "Password not right"
            }
        }
    }

    const token = Base64.encode(qId[0].Id + qPass[0].Password + ",just test token ^.^");

    try {
        await db.query("insert into Token (Token,UserId) values (?,?)", [token, qId[0].Id]);
        return {
            data: {
                token: token
            }
        }
    } catch (error) {
        console.log(error);
        return {
            data: {
                token: token
            }
        }
    }

}

module.exports = {
    POST
}