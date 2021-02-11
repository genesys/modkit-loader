define([], function() {
  var methods = {
    random: function (nb) {
      return Math.floor(Math.random() * nb);
    }
  }
  return methods;
});