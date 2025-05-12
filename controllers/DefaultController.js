'use strict';

var utils = require('../utils/writer.js');
var DefaultController = require('../service/DefaultControllerService');

module.exports.billingReport = function billingReport (req, res, next, body) {
  DefaultController.billingReport(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
