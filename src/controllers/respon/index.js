const responConfig = require('~/configs/respon.config');

const respon = ({ clientRes, store }) => {
    try {
        console.log(store.get_respon_status());
        console.log(store.get_respon_data());
        clientRes.writeHead(store.get_respon_status(), responConfig.headers);
        clientRes.end(store.get_respon_data());
    } catch (error) {
        console.log(error);
        clientRes.writeHead(500, responConfig.headers);
        clientRes.end(JSON.stringify({data:"err respon"}));
    }
}

module.exports = respon;