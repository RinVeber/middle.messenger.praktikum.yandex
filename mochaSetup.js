const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'https://localhost:5173',
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions['.scss'] = function () {
  module.exports = () => ({});
};
require.extensions['.ts'] = function () {
  module.exports = () => ({});
};
require.extensions['.jpg'] = function () {
  module.exports = () => '';
};
require.extensions['.svg'] = function () {
  module.exports = () => '';
};
