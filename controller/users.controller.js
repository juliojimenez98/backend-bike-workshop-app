const { response } = require("express");
const User = require("../models/user");

//obtener todos los usuarios
const getUsers = async (req, res = response) => {
  const users = await User.findAll();

  res.json({ users });
};

//obtener usuario por id
const getUser = async (req, res = response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (user) {
    res.json({ user, id });
  } else {
    res.status(404).json({
      msg: "no existe usuario con ese id",
    });
  }
};

const createUser = async (req, res = response) => {
  const { body } = req;
  try {
    const correoExists = await User.findOne({
      where: {
        correo: body.correo,
      },
    });

    const rutExits = await User.findOne({
      where: {
        rut: body.rut,
      },
    });

    if (correoExists) {
      return res.status(404).json({
        msg: `El usuario con correo ${body.correo} ya esta registrado`,
      });
    }

    if (rutExits) {
      return res.status(404).json({
        msg: `El rut ${body.rut} ya esta registrado`,
      });
    }

    const user = new User(body);
    await user.save();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
