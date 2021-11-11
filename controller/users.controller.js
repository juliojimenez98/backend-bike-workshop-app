const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    msg: "get Api - controller",
  });
};

module.exports = {
  getUsers,
};
