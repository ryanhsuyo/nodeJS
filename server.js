const http = require('http')
const fs = require('fs')

const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./html/${filename})`, (error,data) => {
        if(error){
            response.statusCode = 500
            response.setHeader = ('Content-Type', 'text/plain')
            response.end('Sorry, Internet Error')
        }else{
            response.statusCode = statusCode
            response.setHeader = ("ContentType", "text/html")
            response.end(data)
        }
    })
}


const server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    const url = request.url
    const method = request.method
    if(method === "GET"){
        if(url === '/'){
            sendResponse('/index.html', 200, response)
        }else if( url === 'about.html'){
            sendResponse('/about.html', 200 , response)
        }else{
            sendResponse('/404.html', 404, response)
        }
    }else{

    }
    // response.end('Hello From NodeJS Server2')
})

const port = 3000
const ip = '127.0.0.1'

//1.Port 2.IPaddress 3.cb
server.listen(port, ip, () => {
    console.log(`Server Is Running At http://${ip}:${port}`);
})