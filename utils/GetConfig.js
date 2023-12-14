const dotenv = require("dotenv").config();

module.exports = () => {
  return new Promise((res, rej) => {
    try {
        const config = require("../config")
        res(config)
    } catch {
      rej("Config file not found")
    }
  });
};
