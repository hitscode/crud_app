const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a request to your API to fetch user data
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      // Ensure that the response data is an array of users
      const users = response.data;
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};


exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data })
    })
    .catch(err => {
      res.send(err);
    })
};