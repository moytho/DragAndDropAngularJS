'use strict';

// Declare app level module which depends on other modules
var app =   angular.module('app', [
    'as.sortable',
    'ui.bootstrap'
]);

app.controller('dragDropController', ['$scope', '$window',
    function ($scope, $window) {

        $scope.employees = [];
        $scope.data = 
            { 
                employees: [
                { ID: 1, FirstName: "Erick" },
                { ID: 2, FirstName: "Moises" },
                { ID: 3, FirstName: "Jonathan" }
            ],
                projects: [
                { ID: 1, FirstName: "Test" },
                ]
            };
        
        $scope.setDate = function(project){
            console.log(project);
        };



        $scope.sortableOptions = {
            itemMoved: function (event) {
                console.log(event);
                console.log(event.dest);
                console.log(event.source);
            },
            orderChanged: function (event) {
                console.log(event);
            },
            containment: '#row'
        };

    }]);