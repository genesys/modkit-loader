define(['./anotherfile.js'], function(af) {
  var methods = {
    load: function () {
      window.alert(`AMD module has been loaded. Random number: ${af.random(20)}`);
    },
    unload: function () {
      window.alert(`AMD module has been unloaded. Random number: ${af.random(30)}`);
    }
  }
  return methods;
});