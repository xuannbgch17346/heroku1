const http = require("http");
const port = 3000;

const app = http.createServer((req, res) => {
  res.write("<h1>xuan</h1>");
  res.write("<h3> Xuan</h3>");
  res.end();
});

app.listen(port);