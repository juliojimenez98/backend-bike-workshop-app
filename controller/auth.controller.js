const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/users");

const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req, res = response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).json({
        msg: "No existe un usuario con ese username",
      });
    }

    if (!user.estado) {
      return res.status(400).json({
        msg: "Usuario / password no son correctos - estado:false ",
      });
    }

    //verificar contrasena

    const validPassword = bcryptjs.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "La contrasena es incorrecta",
      });
    }

    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Algo salio mal",
    });
  }
};

module.exports = {
  login,
};
