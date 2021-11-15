const { response } = require("express");
const Client = require("../models/clients");

//obtener todos los usuarios
const getClients = async (req, res = response) => {
  const clients = await Client.findAll();

  res.json({ clients });
};

//obtener usuario por id
const getClient = async (req, res = response) => {
  const { id } = req.params;
  const client = await Client.findByPk(id);

  if (client) {
    res.json({ client, id });
  } else {
    res.status(404).json({
      msg: "no existe usuario con ese id",
    });
  }
};

const createClient = async (req, res = response) => {
  const { body } = req;
  try {
    const correoExists = await Client.findOne({
      where: {
        correo: body.correo,
      },
    });

    const rutExits = await Client.findOne({
      where: {
        rut: body.rut,
      },
    });

    if (correoExists) {
      return res.status(404).json({
        msg: `El cliente con correo ${body.correo} ya esta registrado`,
      });
    }

    if (rutExits) {
      return res.status(404).json({
        msg: `El cliente con rut ${body.rut} ya esta registrado`,
      });
    }

    const client = new Client(body);
    await client.save();
    res.json(client);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const updateClient = async (req, res = response) => {
  const { id } = req.params;
  const { rut, ...rest } = req.body;

  try {
    const client = await Client.findByPk(id);

    console.log(client.rut);
    if (!client) {
      return res.status(404).json({
        msg: "No existe el cliente con el id " + id,
      });
    }

    const correoExists = await Client.findOne({
      where: {
        correo: rest.correo,
      },
    });

    if (correoExists && client.correo !== rest.correo) {
      return res.status(404).json({
        msg: `El cliente con correo ${rest.correo} ya esta registrado`,
      });
    }

    await client.update(rest);

    res.json(client);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

module.exports = {
  getClients,
  getClient,
  createClient,
  updateClient,
};
