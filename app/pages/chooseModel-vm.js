"use strict";

var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array").ObservableArray;
var utils = require("~/utils/helper");


function createViewModel(navigationContext) {
    var mark = navigationContext.mark;
    var viewModel = new Observable();
    viewModel.mark = mark;
    viewModel.filteredModelsList = new observableArray(["Camry", "Land Cruiser"]);

    viewModel.stringLimit = function(string, length) {
        return string.length > length ? string.substring(0, length) + '...' : string;
    }

    viewModel.onItemTap = function (args) {
        utils.nav.goto('pages/chooseYear', {
            'mark': mark,
            'model': viewModel.filteredModelsList.getItem(args.index),
            'addCarOnly': navigationContext.addCarOnly
        });
    }


    return viewModel;
}

exports.createViewModel = createViewModel;