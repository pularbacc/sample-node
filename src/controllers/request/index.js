const parseData = require('~/modules/http.js').parseDataReq;

const urlModule = require('url')

const request = async ({ clientReq, store }) => {
   if (store.get_countinue()) {
      let dataReq = {};
      try {
         try {
            dataReq = await parseData(clientReq);
         } catch (error) {}
       
         const { method, url } = clientReq;
         const parseUrl = urlModule.parse(url, true);

         store.set_request_token(clientReq.rawHeaders[1]);
         store.set_request_method(method);
         store.set_request_data(dataReq);
         store.set_request_pathname(parseUrl.pathname);
         store.set_request_query(parseUrl.query);
      } catch (error) {
         console.log(error);
         store.set_error(400,"Bad request");
      }
   }
   return store;
}

module.exports = request;
