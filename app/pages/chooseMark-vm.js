"use strict";

var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array").ObservableArray;
//var data = require("~/api/firebase-data");
var utils = require("~/utils/helper");


function createViewModel(navigationContext) {
    var viewModel = new Observable();
    viewModel.filteredMarksList = new observableArray(["Toyota", "Mazda"]);

    viewModel.onItemTap = function (args) {
        //console.log(viewModel.filteredMarksList._array[args.index])
        utils.nav.goto('pages/chooseModel', {
            'mark': viewModel.filteredMarksList.getItem(args.index)
        });
    }


    return viewModel;
}

exports.createViewModel = createViewModel;