const express = require("express");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.set("json spaces", 4);

app.get('/', (req, res));

app.use("/desserts", require("./routes/dessertsRoutes"));
app.use("/dinner", require("./routes/dinnerRoutes"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});