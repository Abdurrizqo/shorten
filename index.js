const express = require("express");
require("dotenv").config();
var cors = require("cors");
const dbConfig = require("./configs/DBConfig");
const bodyParser = require("body-parser");
const router = require("./routes/route");
const handleErros = require("./middlewares/handleErrors");
const morgan = require("morgan");
const { confirmationRegister } = require("./controllers/authController");

dbConfig();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use("/api/v1", router);
app.use("/:idUser/:tokeConfirmation", confirmationRegister);
app.use(handleErros);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
