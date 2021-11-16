const { response } = require("express");
const User = require("../models/users");
const bcryptjs = require("bcryptjs");

const createUser = async (req, res = response) => {
  const { body } = req;
  try {
    const usernameExists = await User.findOne({
      where: {
        username: body.username,
      },
    });

    if (usernameExists) {
      return res.status(404).json({
        msg: `El usuario con nombre de usuario: ${body.username} ya esta registrado`,
      });
    }

    const user = new User(body);

     //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

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
  createUser,
};
