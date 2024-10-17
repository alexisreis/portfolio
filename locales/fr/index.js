const components = require('./components');
const frJson = require('./fr');
const projects = require('./projects');

const fr = {
  components,
  projects,
  ...frJson,
};

module.exports = fr;
