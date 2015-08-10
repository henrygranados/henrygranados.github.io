var app = angular.module('plunker', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.controller('DialogDemoCtrl', function($scope, $modal, $log) {
  $scope.items = [];
  $scope.activeItem = {
    id: '',
    name: '',
    content: ''
  };

  $scope.addItem = function() {
    $scope.activeItem.id = $scope.items.length + 1;
    $scope.items.push($scope.activeItem);
    $scope.activeItem = {}; /* reset active item*/

  };

  $scope.getId = function(item) {
    alert('ID: ' + item.id);

  };
  $scope.openPopupScreen = function() {

    var modalInstance = $modal.open({
      template: '<div class="modal-header">   <a class="close" data-dismiss="modal">×</a>    <h1>Add Element</h1></div><div class="modal-body">    <form >' +
        '  <label>Name:</label><input type="text" class="span3" ng-model="activeItem.name"></br>' +
        ' <label>Content Name:</label><input type="password" class="span3" ng-model="activeItem.content"></br>' +
        ' <button type="submit" class="btn btn-success" ng-click="addItem()">Add In List</button>' +
        '  <button type="reset" class="btn ">Clear</button>' +
        ' </form>' +
        '</div>' +
        '<div class="modal-footer">' +
        '  <a class="btn" data-dismiss="modal" aria-hidden="true" ng-click="cancel()">close</a>' +
        '</div>',
      controller: ModalInstanceCtrl
    });

  };

});

var ModalInstanceCtrl = function($scope, $modalInstance) {

 

  $scope.ok = function() {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};