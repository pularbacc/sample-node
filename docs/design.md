
# accept request 

# processing resquest 
- what path ?
- what methods ?

# return responsive 

-> app 
        - server
            - router
        - data
        - modules


-> Server -> Controller
                    -> Accept 
                    -> Processing 
                        # Router
                            -> /            [GET],[POST],[PUT],[DELETE]
                            -> /student     [GET],[POST],[PUT],[DELETE]
                            -> /messages    [GET],[POST],[PUT],[DELETE]
                    -> Responsive 


 # DATA
    > Connect
    > BEAN
    > BO
    > DAO

# Server
    > request 
    > responsive

# Controller
    > process request
    > process controll
    > process responsive 


# http method
[GET],[POST],[PUT],[PATCH],[DELETE]



### DESIGN PATTERN
|----------------------------------------------------------
|- server.js 
|- [model] ` dat `
|       |--- [bean]
|       |       |--- user.bean.js
|       |       |--- subject.bean.js
|       |--- [bo]
|       |       |--- user.bo.js
|       |       |--- subject.bo.js
|       |--- [#dao]
|       |       |--- user.dao.js
|       |       |--- subject.dao.js
|       |--- [#connect]
|       |       |--- db.connect.js
|       |       |--- db.query.js
|- [controllers]
|       |--- server.controller.js
|       |--- [#request]
|       |       |--- server.request.js
|       |--- [#routing]
|       |--- [#process]
|       |       |--- index.js
|       |       |--- auth.js
|       |--- [#responsive]
|       |       |--- server.responsive.js
|- [modules]
|       |--- math.js
|       |--- files.js
|       |--- [router]
|       |       |--- parserRouter.js
|       |       |--- mappingRouter.js
|------------------------------------------------------------


