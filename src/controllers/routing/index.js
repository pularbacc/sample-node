const process = require('~/process');

const callProcess = async (store, processRequest) => {
    try {
        const processRequestMethod = processRequest[store.get_request_method()];
        if (processRequestMethod == undefined) {
            store.set_error(400, "Can't find METHOD");
        } else {
            try {
                const { err, data } = await processRequestMethod({
                    token: store.get_request_token(),
                    data: store.get_request_data(),
                    query: store.get_request_query()
                });
                if (err != undefined) {
                    if (err.status == undefined || err.message == undefined) {
                        console.log("err not true format");
                    } else {
                        console.log("on set err");
                        store.set_error(err.status, err.message);

                    }
                } else {
                    if (data != undefined) {
                        console.log("on set data")
                        store.set_respon(data);
                    }
                }
            } catch (error) {
                console.log("ERROR OR DATA PROCESS REQUIRE");
                store.set_error(500, "Unknow data return");
            }

        }
    } catch (error) {
        console.log(error);
    }
}

const routing = async (store) => {
    if (store.get_countinue()) {
        try {
            const processRequest = process[store.get_request_pathname()];
            if (processRequest == undefined) {
                store.set_error(400, "Can't find PATH");
            } else {
                await callProcess(store, processRequest)
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = routing;