cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-google-analytics.UniversalAnalytics",
    "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
    "pluginId": "cordova-plugin-google-analytics",
    "clobbers": [
      "analytics"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.notification_android",
    "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.Toast",
    "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
    "pluginId": "cordova-plugin-x-toast",
    "clobbers": [
      "window.plugins.toast"
    ]
  },
  {
    "id": "cordova-plugin-x-toast.tests",
    "file": "plugins/cordova-plugin-x-toast/test/tests.js",
    "pluginId": "cordova-plugin-x-toast"
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "pushwoosh-cordova-plugin.PushNotification",
    "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
    "pluginId": "pushwoosh-cordova-plugin",
    "clobbers": [
      "plugins.pushNotification"
    ]
  },
  {
    "id": "com.bez4pieci.cookies.cookies",
    "file": "plugins/com.bez4pieci.cookies/www/cookies.js",
    "pluginId": "com.bez4pieci.cookies",
    "clobbers": [
      "cookies"
    ]
  },
  {
    "id": "cordova-plugin-smsreceiver.SmsReceivingPlugin",
    "file": "plugins/cordova-plugin-smsreceiver/www/SmsReceiver.js",
    "pluginId": "cordova-plugin-smsreceiver",
    "clobbers": [
      "window.sms"
    ]
  },
  {
    "id": "uk.co.workingedge.phonegap.plugin.istablet.IsTablet",
    "file": "plugins/uk.co.workingedge.phonegap.plugin.istablet/www/istablet.js",
    "pluginId": "uk.co.workingedge.phonegap.plugin.istablet",
    "runs": true
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation.android",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.android.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "merges": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-x-socialsharing.SocialSharing",
    "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
    "pluginId": "cordova-plugin-x-socialsharing",
    "clobbers": [
      "window.plugins.socialsharing"
    ]
  },
  {
    "id": "cordova-plugin-customurlscheme.LaunchMyApp",
    "file": "plugins/cordova-plugin-customurlscheme/www/android/LaunchMyApp.js",
    "pluginId": "cordova-plugin-customurlscheme",
    "clobbers": [
      "window.plugins.launchmyapp"
    ]
  },
  {
    "id": "cordova-universal-links-plugin.universalLinks",
    "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
    "pluginId": "cordova-universal-links-plugin",
    "clobbers": [
      "universalLinks"
    ]
  },
  {
    "id": "com.adjust.sdk.Adjust",
    "file": "plugins/com.adjust.sdk/www/adjust.js",
    "pluginId": "com.adjust.sdk",
    "clobbers": [
      "Adjust"
    ]
  },
  {
    "id": "com.adjust.sdk.AdjustConfig",
    "file": "plugins/com.adjust.sdk/www/adjust_config.js",
    "pluginId": "com.adjust.sdk",
    "clobbers": [
      "AdjustConfig"
    ]
  },
  {
    "id": "com.adjust.sdk.AdjustEvent",
    "file": "plugins/com.adjust.sdk/www/adjust_event.js",
    "pluginId": "com.adjust.sdk",
    "clobbers": [
      "AdjustEvent"
    ]
  },
  {
    "id": "cordova-plugin-call-number.CallNumber",
    "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
    "pluginId": "cordova-plugin-call-number",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "cordova-plugin-contacts.contacts",
    "file": "plugins/cordova-plugin-contacts/www/contacts.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "navigator.contacts"
    ]
  },
  {
    "id": "cordova-plugin-contacts.Contact",
    "file": "plugins/cordova-plugin-contacts/www/Contact.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "Contact"
    ]
  },
  {
    "id": "cordova-plugin-contacts.convertUtils",
    "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
    "pluginId": "cordova-plugin-contacts"
  },
  {
    "id": "cordova-plugin-contacts.ContactAddress",
    "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactAddress"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactError",
    "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactError"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactField",
    "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactField"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFindOptions",
    "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactFindOptions"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactName",
    "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactName"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactOrganization",
    "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
    "pluginId": "cordova-plugin-contacts",
    "clobbers": [
      "ContactOrganization"
    ]
  },
  {
    "id": "cordova-plugin-contacts.ContactFieldType",
    "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
    "pluginId": "cordova-plugin-contacts",
    "merges": [
      ""
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "plugin.notification.badge",
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-qrscanner.QRScanner",
    "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
    "pluginId": "cordova-plugin-qrscanner",
    "clobbers": [
      "QRScanner"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-network-information": "1.0.1",
  "sk.kcorp.cordova.ios-security": "0.3.0",
  "cordova-plugin-geolocation": "2.4.3",
  "cordova-plugin-inappbrowser": "1.4.0",
  "cordova-plugin-statusbar": "1.0.1",
  "cordova-plugin-device": "1.0.1",
  "cordova-plugin-google-analytics": "0.8.1",
  "cordova-custom-config": "3.1.4",
  "cordova-plugin-dialogs": "1.1.1",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-x-toast": "2.2.3",
  "ionic-plugin-keyboard": "1.0.9",
  "pushwoosh-cordova-plugin": "6.5.3",
  "com.bez4pieci.cookies": "0.0.1",
  "cordova-plugin-smsreceiver": "1.0.0",
  "uk.co.workingedge.phonegap.plugin.istablet": "1.1.1",
  "cordova-plugin-screen-orientation": "1.4.2",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-x-socialsharing": "5.1.8",
  "cordova-plugin-customurlscheme": "4.2.0",
  "cordova-universal-links-plugin": "1.2.1",
  "com.app-sauce.telephony-not-required": "1.0.0",
  "com.adjust.sdk": "4.14.0",
  "cordova-plugin-call-number": "1.0.1",
  "cordova-plugin-contacts": "2.3.1",
  "cordova-plugin-app-event": "1.2.1",
  "cordova-plugin-badge": "0.7.4",
  "cordova-plugin-qrscanner": "2.6.0",
  "cordova-plugin-vs-taco-support": "0.2.0"
};
// BOTTOM OF METADATA
});