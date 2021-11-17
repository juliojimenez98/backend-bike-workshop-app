const express = require("express");
const cors = require("cors");
const db = require("../db/connection");

//import routes from './routes';

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.clientsPath = "/api/clients";
    this.authPath = "/api";
    this.usersPath = "/api/users";

    this.dbConnection();

    //middelwares
    this.middlewares();

    //Routes
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("conectado a la base de datos");
    } catch (error) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.clientsPath, require("../routes/client.routes"));
    this.app.use(this.authPath, require("../routes/auth.routes"));
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en el puerto ", this.port);
    });
  }
}

module.exports = Server;
