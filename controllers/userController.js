const User = require("../models/user");
insertUser = async (req, res, next) => {
  const user = new User({
    userName: req.body.username,
    userEmail: req.body.userEmail,
  });
  await user
    .save()
    .then(() => {
      console.log(user);
      res.redirect("/getUsers");
    })
    .catch((err) => {
      console.error(err);
    });
};

getUsers = async (req, res, next) => {
  const users = await User.find();
  console.log(users.length);
  res.render("index", { users: users });
};

updateUser = async (req, res, next) => {
  const ID = req.body.ID;
  const updateUser = {
    userName: req.body.username,
    userEmail: req.body.userEmail,
  };
  await User.updateOne({ _id: ID }, { $set: updateUser })
    .then(() => {
      res.redirect("/getUsers");
    })
    .catch((err) => {
      console.log(`erreor>>>>>>>${err}`);
    });
};

deleteUser = async (req, res, next) => {
  const ID = req.body.ID;
  await User.deleteOne({ _id: ID })
    .then(() => {
      res.redirect("/getUsers");
    })
    .catch((err) => {
      console.log(`erreor>>>>>>>${err}`);
    });
};

getSpecificUser = async (req, res, next) => {
  const ID = req.body.ID;
  const users = await User.find({ _id: ID });
  res.render("index", { user: users });
};

module.exports = {
  insertUser: insertUser,
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getSpecificUser: getSpecificUser,
};
