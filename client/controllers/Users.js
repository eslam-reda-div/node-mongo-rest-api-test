'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.deleteUser = function deleteUser (req, res, next, eSLAMAUTH, userId) {
  Users.deleteUser(eSLAMAUTH, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsers = function getUsers (req, res, next, eSLAMAUTH) {
  Users.getUsers(eSLAMAUTH)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next, body, userId, eSLAMAUTH) {
  Users.updateUser(body, userId, eSLAMAUTH)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
