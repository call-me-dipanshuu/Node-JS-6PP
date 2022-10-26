// const a = 40;
// module.exports = a;

// const a = {
//   average: (a, b) => {
//     console.log((a + b) / 2);
//   },
//   percent: (a, b) => {
//     console.log((a / b) * 100);
//   },
// };
// module.exports = a;
//fs.readFile is asynchronous
// const fs = require("fs");
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const fs = require("fs");
// const a = fs.readFileSync("./sample.txt", "utf-8");
// console.log(a);
// console.log("I am first");

// const fs = require("fs");
// const a = "This is made by Deepanshu Singh";
// fs.writeFile("./abc.txt", a, () => {
//   console.log("Written");
// });
// console.log("I am first");

// const fs = require("fs");
// const a = "This is made by chulbul pandey";
// const v = fs.writeFileSync("./def.txt", a);
// console.log(v);
// console.log("I am  first");

// const path = require("path");
// const a = path.extname("/node/index.html");
// console.log(a);

// const pokemon = require("pokemon");
// console.log(pokemon.random());

const http = require("http");
const fs = require("fs");
const home = fs.readFileSync("./index.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");
const contact = fs.readFileSync("./contact.html", "utf-8");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.end("<h1>Hello World</h1>");
  if (req.url === "/") return res.end(home);
  else if (req.url === "/about") return res.end(about);
  else if (req.url === "/contact") return res.end(contact);
  else if (req.url === "/services") return res.end("<h1>Our Services</h1>");
  else res.end("<h1>404</h1>");
});
const PORT = process.env.PORT;
const hostname = "localhost";
server.listen(PORT, () => {
  console.log(`Server is running`);
});
