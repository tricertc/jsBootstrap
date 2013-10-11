var App = (function () {
  var App = {};

  App.init = function (container, message) {
    container.innerHTML = message;
  };

  return App;
}());