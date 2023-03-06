## node js 

# Headers
* res.writeHead(statusCode,[statusMessage],headers)
- statusCode : 200,403,...
- headers : 'Content-Type': "application/json",
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"


# status code
- with status code err we can send error to client

- orangize data send : 
    [success] : {
        status: "success",
        data : dataSend
    }

    [error] : {
        status: "failure",
        error : messageError
    }


# Send 
* res.end(data)
- data : text,json ...
- to send json data use JSON.stringify()


# Req
* const {method,url,headers} = req;

- get body: const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const dataReqJson = Buffer.concat(buffers).toString();
            const dataReq = JSON.parse(dataReqJson);


# Config run server 
* const http = require('http')
* const server = http.createServer()
* server.listen(port,host, function() )

# use modules
* module.exports = 
* const module = require('')


# Methods
* GET,POST,PUT,PATCH,DELETE,OPTIONS


# List status code
[Information-responses] 
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
[Successful-responses]
**'200': 'OK'**
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
[Redirection-messages]
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Moved Temporarily',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '307': 'Temporary Redirect',
[Client-error-responses]
**'400': 'Bad Request'** 
  '401': 'Unauthorized',
  '402': 'Payment Required',
**'403': 'Forbidden'**
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Time-out',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Request Entity Too Large',
  '414': 'Request-URI Too Large',
  '415': 'Unsupported Media Type',
  '416': 'Requested Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': 'I\'m a teapot',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
[Server-error-responses]
**'500': 'Internal Server Error'**
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Time-out',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required' 


# Mariadb 

[select]
- Dữ liệu _select_ trả về 1 kiểu object nhưng không quan trọng 
- Có thể coi dữ liệu đó là 1 _mãng_ thuần và bỏ qua meta
- Mãng gồm các _đối tượng_ thuần ,
- Các đối tượng có các `thuộc tính` là cái mà ta query 

* Example :
* SELECT email,password FROM users
=> return : [{email:"man@gmail.com",password:"123"}]
       or : [{email:"vip@gmail.com",password:"246"},{email:"pro@gmail.com,password:"111"}]

**các hành động khác** sẽ trả về  `{ affectedRows: num, insertId: num[n], warningStatus: num }`





# Key code md
- [kinh]
- _hello_
- <haha>
- # go to 
- - work
- * ok 
- **haha**
- `haha`
- + vip 
- * haha 
  