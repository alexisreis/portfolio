const components = require('./components');
const enJson = require('./en');
const projects = require('./projects');

const en = {
  components,
  projects,
  ...enJson,
};

module.exports = en;
