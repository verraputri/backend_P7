const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./App/models");
const app = express();

const corsOptions = {
  origin: "*",
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//koneksi database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((err) => {
    console.log("gagal konek");
    process.exit();
  });

//memanggil routes univeritas
require("./App/routes/universitas.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("server started on port 8000"));