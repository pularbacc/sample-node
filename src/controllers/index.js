
const request = require('./request');
const routing = require('./routing');
const respon = require('./respon');
const Store = require('./store');

const controller = async ({clientReq, clientRes}) => {
    const store = new Store();
    try {
        await request({clientReq, store});
        await routing(store);
        await respon({clientRes, store});
    } catch (error) {
        console.log(error);
    }
}

module.exports = controller