const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("Here is short history");
  }

  res.end(`
  <h1>OOps!</h1>
  <p>We cannot seem to find the page that you are looking for</p>
  <a href="/"> back home</a>
  `);
});

server.listen(5000);
