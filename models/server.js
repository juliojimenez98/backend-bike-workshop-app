const express = require("express");
const cors = require("cors");

//import routes from './routes';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //middelwares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto ", this.port);
    });
  }
}

module.exports = Server;
