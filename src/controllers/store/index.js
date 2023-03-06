
class Store {
    #countinue = true;
    #request = {
        token: null,
        method: null,
        data: {},
        pathname: null,
        query: {}
    }
    #respon = {
        status: 200,
        data: JSON.stringify({})
    }
    constructor() {
    }

    //---STATUS STORE
    get_countinue() {
        return this.#countinue;
    }
    #set_countinue(bool) {
        this.#countinue = bool;
    }

    //---GET CLIENT REQUEST
    get_request_token() {
        return this.#request.token;
    }
    get_request_method() {
        return this.#request.method;
    }
    get_request_data() {
        return this.#request.data;
    }
    get_request_query() {
        return this.#request.query;
    }
    get_request_pathname() {
        return this.#request.pathname;
    }

    //---SET CLIENT REQUEST
    set_request_method(method) {
        this.#request.method = method;
    }
    set_request_data(data) {
        this.#request.data = data;
    }
    set_request_pathname(pathname) {
        this.#request.pathname = pathname;
    }
    set_request_query(query) {
        this.#request.query = query;
    }

    set_request_token(token) {
        this.#request.token = token;
    }

    //--- GET DATA RESPON
    get_respon_status() {
        return this.#respon.status;
    }
    get_respon_data() {
        return this.#respon.data;
    }


    //--- SET DATA RESPON
    #set_respon_status(status) {
        this.#respon.status = status;
    }
    #set_respon_data(data) {
        this.#respon.data = data;
    }

    set_respon(data) {
        this.#set_respon_status(200);
        this.#set_respon_data(JSON.stringify({
            data: data
        }))
    }
    set_error(status, error) {
        this.#set_countinue(false);
        this.#set_respon_status(status);
        this.#set_respon_data(JSON.stringify({
            error: error
        }))
    }
}

module.exports = Store;