const {
  newUser,
  findUserByEmailPassword,
  accountConfirmation,
} = require("../service/authService");

async function registerUser(req, res, next) {
  try {
    const user = await newUser(req.body, req.get("host"));
    return res.status(201).json(user);
  } catch (error) {
    if (error.code == 11000) {
      return res.status(400).json({
        error: "Duplicate Value",
        detail: error.message,
      });
    }
    next(error);
  }
}

async function loginUser(req, res, next) {
  try {
    const user = await findUserByEmailPassword(req.body);

    return res.status(200).json(user);
  } catch (error) {
    if (error.message == "Invalid Password or Email") {
      return res
        .status(404)
        .json({ error: "Not Found", detail: error.message });
    }
    next(error);
  }
}

async function confirmationRegister(req, res, next) {
  try {
    const user = await accountConfirmation(
      req.params.idUser,
      req.params.tokeConfirmation
    );

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  confirmationRegister,
};
