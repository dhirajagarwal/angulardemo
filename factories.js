var factories = angular.module('Factories',[])

factories.factory('sampleFactory',function() {
  var myString ="this is the default set string"
  var addToString = function(newStr){
    myString += newStr
  }
  return {
    getData:function(){
      return "String contains = " + myString
    },
    addData:addToString
  }
})
