const user = require("./userSchema");

async function seeder() {
  await user.deleteMany();
  await user.create({
    username: "abdurrizqo",
    password: "Riko@2013",
    email: "Riko@gmail.com",
    isConfirm: true,
  });
}

module.exports = { seeder };
