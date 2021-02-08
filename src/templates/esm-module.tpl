const script = document.getElementById('${moduleId}');
import('${endpoint}')
  .then(function (_mod) {
    script.onmodkitinit(_mod);
  })
  .catch(function (err) {
    script.onmodkiterror(err);
  });
