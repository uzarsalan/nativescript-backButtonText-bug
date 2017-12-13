"use strict";

var utils = require("~/utils/helper");
var createViewModel = require("./chooseYear-vm").createViewModel;

function onNavigatingTo(args) {
    var page = args.object;
    var navigationContext = page.navigationContext
    page.bindingContext = createViewModel(navigationContext);
}

function back(args) {
    utils.flicker(args.object);
    utils.nav.back();
}

exports.onNavigatingTo = onNavigatingTo;
exports.back = back;