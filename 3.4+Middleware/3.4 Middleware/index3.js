import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("URL method: ", req.url);
  next();
}

app.use(logger);

// const logger = (req, res, next) => {
//   console.log("Request method: ", req.method);
//   next();
// };

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
