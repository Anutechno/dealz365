const app = require("./app");

const connectDatabase = require("./config/database");

require("dotenv").config({ path: "backend/.env" });

const port = process.env.PORT || 5000;
// connect with database
connectDatabase();

app.listen(port, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server is working on http://192.168.0.103:${port}`);
});
