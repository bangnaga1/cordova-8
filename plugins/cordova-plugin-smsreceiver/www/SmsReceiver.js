cordova.define("cordova-plugin-smsreceiver.SmsReceivingPlugin", function(require, exports, module) {
/*
Copyright (C) 2016 by Ahmed Wahba

*/


module.exports = {
    isSupported: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'SmsReceivingPlugin', 'HasReceivePermission', []);
    },
    startReceiving: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'SmsReceivingPlugin', 'StartReceiving', []);
    },
    stopReceiving: function (successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'SmsReceivingPlugin', 'StopReceiving', []);
    }
};

});
