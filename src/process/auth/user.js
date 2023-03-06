const db = require("../../db/db");

const GET = async({token})=>{
    console.log("on get info");
    console.log(token);
    if(typeof token == "string"){
        token = token.slice(7,token.length);
    }else{
        return{
            err:{
                status:401,
                message:"Token not valid"
            }
        }
    }

    const qUser = await db.query("select * from User where Id = (?)",[])
}

module.exports = {
    GET
}