import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import routes from "./routes/routes.js";
// import auth from "./routes/auth.js";

const app = express();
const port = 4000 || process.env.PORT;

app.use(express.json());
app.use(Cors());

const url =
  "mongodb+srv://Harsh123:1mywbolpKQ01XIJj@cluster0.qpmir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("App deployed1");
});

app.listen(port, function () {
  console.log("listening on localhost:" + port);
});
