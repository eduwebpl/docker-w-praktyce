const http = require('http');
const fs = require('fs').promises;

const requestListener = async function (req, res) {
  const dataToServe = (await fs.readFile('/index.html')).toString('utf-8');
  res.writeHead(200);
  res.end(dataToServe);
}

const server = http.createServer(requestListener);
server.listen(8080);