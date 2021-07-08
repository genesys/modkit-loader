import JSONFormatter from 'json-formatter-js';

export default (context, inject) => {
  inject('json', {
    format (obj) {
      return new JSONFormatter(obj, Infinity, { theme: 'dark' });
    }
  });
};
