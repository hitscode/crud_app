var Userdb = require("../model/model");

//create and save user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(404).send({ message: "Content can't be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user
  user
    .save(user)
    .then((data) => {
      // res.send(data)
      res.redirect("/add_user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured while creating operation",
      });
    });
};

// retrieves and return all users / retrive and return a single user
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.params.id;
    Userdb.findById(id)
      .then((user) => {
        if (!user) {
          res
            .status(404)
            .send({ message: err.message || "Error not found user" + id });
        } else {
          res.send(user);
        }
      })
      .catch((err) => {
        res.status(500).send({ massage: "Error while fatching :" + id });
      });
  } else {
    Userdb.find()
      .then((user) => {
        res.send(user);
        // res.redirect('/add_user');
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "error while fatching data..." });
      });
  }
};

//update new user
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update cannot be empty." });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          massage:
            err.massage || `Cannot Update with ${id}. or User not found.`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "error while fatching data..." });
    });
};

//delete user

exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          massage:
            err.massage || `Cannot delete with ${id}. or User not found.`,
        });
      } else {
        res.send({ massage: "User deleted successfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error while Deleting data id" + id });
    });
};
