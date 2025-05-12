'use strict';


/**
 * 고객 정보 확인
 * 고객의 정보를 확인하여 서비스 계약 번호를 확인
 *
 * body Identification_body 
 * returns IdentificationResponse
 **/
exports.customerIdentification = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "serviceStatus" : "active",
  "resultCode" : "success",
  "paymentMethod" : "credit_card",
  "resultMessage" : "성공",
  "serviceContractNumber" : "1234567890"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 결제 방법 조회
 * 결제 방법 조회, 서비스 계약 번호와 결제 방법을 입력하여 결제 방법을 조회. 결제 방법은 credit_card, bank_transfer 중 하나로 입력. 결제 기관은 신한카드, 국민카드, 우리카드, 국민은행 등으로 입력.
 *
 * body Payment_methodInquiry_body 
 * returns generalResponse
 **/
exports.paymentMethodInquiry = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : "success",
  "errorCode" : "400",
  "resultMessage" : "성공"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 결제 방법 변경
 * 결제 방법 변경, 서비스 계약 번호와 결제 방법을 입력하여 결제 방법을 변경. 결제 방법은 credit_card, bank_transfer 중 하나로 입력. 결제 기관은 신한카드, 국민카드, 우리카드, 국민은행 등으로 입력. 계좌 번호와 카드 번호는 공백 없이 입력
 *
 * body Payment_updateMethod_body 
 * returns generalResponse
 **/
exports.paymentMethodUpdate = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : "success",
  "errorCode" : "400",
  "resultMessage" : "성공"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 부가 서비스 가입
 * 부가 서비스 가입. 서비스 계약 번호와 상품 코드를 입력하여 부가 서비스에 가입. 상품 코드는 사전에 클라이언트에서 알고 있는 정보임.
 *
 * body Service_enroll_body 
 * returns generalResponse
 **/
exports.serviceEnrollment = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : "success",
  "errorCode" : "400",
  "resultMessage" : "성공"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 부가 서비스 해지
 * 부가 서비스 해지, 서비스 계약 번호와 상품 코드를 입력하여 부가 서비스 해지. 상품 코드는 사전에 클라이언트에서 알고 있는 정보임.
 *
 * body Service_terminate_body 
 * returns generalResponse
 **/
exports.serviceTermination = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resultCode" : "success",
  "errorCode" : "400",
  "resultMessage" : "성공"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

