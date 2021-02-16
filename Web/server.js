let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function(req, res) {
    let p = url.parse(req.url, true);
    let ts = Date.now();
    const filename = "." + p.pathname;
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(p.pathname + "Error not found");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    console.log(p.query);
    res.end(
      "Hello " +
        p.query["name"] +
        "! The Current Date is: " +
        date +
        "-" +
        month +
        "-" +
        year +
        " and Time is: " +
        hours +
        ":" +
        minutes
    );
  })
  .listen(8888);

console.log("Server is running...");
