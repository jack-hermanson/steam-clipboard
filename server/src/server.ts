import express from "express";
import * as http from "http";
import sslRedirect from "heroku-ssl-redirect";
import path from "path";

// express
const app = express();
app.set("port", process.env.PORT || 5000);

// ssl
app.use(sslRedirect(["production"]));

// static
const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

// http server
const server = http.createServer(app);
server.listen(app.get("port"), () => {
    console.log(`Server is listening on port ${app.get("port")}.`);
});
