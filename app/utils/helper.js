"use strict";

var appSettings = require("application-settings");
var frameModule = require("ui/frame");
var utilsModule = require("tns-core-modules/utils/utils");
var dialogs = require("ui/dialogs");

console.log("helper.js loaded");


var nav = {}
nav.goto = function(page, context, clearHistory) {
    var navigationEntry = {
        moduleName: page,
        context: context,
        animated: false,
        clearHistory: clearHistory ? true : false
    };
    frameModule.topmost().navigate(navigationEntry);
}

nav.back = function() {
    frameModule.topmost().goBack();
}


exports.nav = nav;