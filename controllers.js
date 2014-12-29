/**
 * Created by dhirajagarwal on 25/12/14.
 */
var controllers = angular.module('Controllers',['Factories'])

controllers.controller('FirstCtrl',function($scope,sampleFactory){
    console.log(sampleFactory.getData())
    sampleFactory.addData('Dhiraj')
})

controllers.controller('SecondCtrl',function($scope,sampleFactory){
    console.log("New Ctrl--" +sampleFactory.getData())
    sampleFactory.addData('Dhiraj asd')
    console.log("New --" +sampleFactory.getData())
})
