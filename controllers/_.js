'use strict';

var utils = require('../utils/writer.js');
var _ = require('../service/_Service');

module.exports.customerIdentification = function customerIdentification (req, res, next, body) {
  _.customerIdentification(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymentMethodInquiry = function paymentMethodInquiry (req, res, next, body) {
  _.paymentMethodInquiry(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymentMethodUpdate = function paymentMethodUpdate (req, res, next, body) {
  _.paymentMethodUpdate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceEnrollment = function serviceEnrollment (req, res, next, body) {
  _.serviceEnrollment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceTermination = function serviceTermination (req, res, next, body) {
  _.serviceTermination(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
