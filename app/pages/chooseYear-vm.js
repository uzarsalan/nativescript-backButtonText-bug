"use strict";

var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array").ObservableArray;
var utils = require("~/utils/helper");


function createViewModel(navigationContext) {
    var viewModel = new Observable();
    viewModel.mark = navigationContext.mark;
    viewModel.model = navigationContext.model;
    generateyears().then(function (data) {
        console.log(JSON.stringify(data));
        viewModel.set('years', data);
    })

    function generateyears(startYear) {
        return new Promise(function (resolve, reject) {
            var currentYear = new Date().getFullYear(),
                years = [];
            startYear = startYear || 1960;

            while (startYear <= currentYear) {
                years.push((currentYear--).toString());
                if (startYear > currentYear)
                    //return years;
                    resolve(years);
            }
        });
    }

    viewModel.stringLimit = function(string, length) {
        return string.length > length ? string.substring(0, length) + '...' : string;
    }


    return viewModel;
}

exports.createViewModel = createViewModel;