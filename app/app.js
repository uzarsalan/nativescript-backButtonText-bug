"use strict";

var application = require("application");
var appSettings = require("application-settings");
var ObservableModule = require("data/observable");

application.start({
	moduleName: 'pages/chooseMark'
});

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/