function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function commonHello(){
    console.log("hello world common 123");
}

module.exports = {
    delay : delay,
    commonHello:commonHello
}