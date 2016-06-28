(function(){
var app= angular.module('paulSite', []); //defines module

app.directive("imgCarousel", function() {
  return{
    restrict: 'E',
    templateUrl: "js/snips/img-carousel.html"
  };
});

app.directive("aboutPage", function() {
  return{
    restrict: 'E',
    templateUrl: "js/snips/about.html"
  };
});

app.directive("contactPage", function() {
  return{
    restrict: 'E',
    templateUrl: "js/snips/contact.html"
  };
});

app.controller('tabController', [ "$scope", function($scope){
  this.tab = 0;
  this.setTab = function(passedValue){
    this.tab = passedValue;
    console.log(this.tab);
  };
  this.openModal = function(){
    //open a modal
  }
}]);

})();
