
const parseDataReq = async (req) => {
    const buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const dataReqJson = Buffer.concat(buffers).toString();
    const dataReq = JSON.parse(dataReqJson);
    return dataReq
}


/*
string
boolean
number
*/
const validation = (data, requires) => {

    for (const require of requires) {
        if (data[require.key] == undefined) {
            if(require.notNull){
                return {
                    status: false,
                    message: `${require.key} must not be blank`
                }
            }else{
                if(data[require.key] == undefined){
                   data[require.key] = null;
                }
            }
        }
        if(data[require.key] != undefined){
            if (typeof (data[require.key]) != require.type) {
                return {
                    status: false,
                    message: `typeof ${require.key} must is ${require.type} `
                }
            }
        }

    }

    return {
        status: true
    }
}



module.exports = {
    parseDataReq: parseDataReq,
    validation: validation
}