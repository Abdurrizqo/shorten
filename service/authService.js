const Users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../configs/SendMail");
const generateRandomAlphanumeric = require("../configs/GenerateRandomCode");

async function newUser(body, url) {
  try {
    await bcrypt
      .hash(body.password, 10)
      .then(function (hash) {
        body.password = hash;
      })
      .catch((err) => {
        throw err;
      });
    const confirmationCode = generateRandomAlphanumeric(8);

    const tokenCodeConfirmation = jwt.sign(
      { confirmationCode },
      process.env.SECRETCODECONFIRMATION,
      {
        expiresIn: 60 * 60 * 24 * 3,
      }
    );

    const user = await Users.create({
      ...body,
      codeConfirmation: tokenCodeConfirmation,
    });

    sendMail(user.email, `${url}/${user._id}/${tokenCodeConfirmation}`).catch(
      (e) => {
        throw e;
      }
    );

    return { data: user };
  } catch (error) {
    throw error;
  }
}

async function findUserByEmailPassword(body) {
  try {
    let user = await Users.findOne({ email: body.email }).exec();

    if (!user) {
      throw new Error("Invalid Password or Email");
    }

    const match = await bcrypt
      .compare(body.password, user.password)
      .then(function (result) {
        return result;
      })
      .catch((err) => {
        throw err;
      });

    if (!match) {
      throw new Error("Invalid Password or Email");
    }

    const token = jwt.sign(
      {
        username: user.username,
        name: user.name,
        email: user.email,
        _id: user._id,
      },
      process.env.SECRETCODE,
      {
        expiresIn: 60 * 60 * 24 * 3,
      }
    );

    return {
      data: {
        username: user.username,
        name: user.name,
        email: user.email,
        _id: user._id,
        token: token,
        expiresIn: 60 * 60 * 24 * 3,
      },
    };
  } catch (error) {
    throw error;
  }
}

async function accountConfirmation(idUser, tokeConfirmation) {
  try {
    jwt.verify(
      tokeConfirmation,
      process.env.SECRETCODECONFIRMATION,
      async (err, data) => {
        await Users.findOneAndUpdate({ _id: idUser }, { isConfirm: true });
      }
    );
    return { data: "done" };
  } catch (error) {
    throw error;
  }
}
module.exports = {
  newUser,
  findUserByEmailPassword,
  accountConfirmation,
};
