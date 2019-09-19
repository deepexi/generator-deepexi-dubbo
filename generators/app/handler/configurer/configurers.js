const fs = require('fs');
const path = require('path');

const configurers = {};

const files = fs.readdirSync(__dirname);
files.forEach(file => {
  const obj = require(path.join(__dirname, file));
  if (obj.key && obj.fn) {
    configurers[obj.key] = obj.fn;
  }
})

const types = ['mq', 'converter', 'discovery', 'httpRequest', 'circuit', 'db', 'orm', 'dbPool'];

configurers.receive = (event, args) => {
  types.forEach(type => {
    const typeVal = args.props[type];
    if (typeVal) {
      let configurer;
      if (typeof typeVal === 'string') {
        configurer = configurers[typeVal];
      } else {
        configurer = configurers[type];
      }
      if (!configurer) {
      } else {
        switch (event) {
          case 'configure_optional_dependencies': {
            if (configurer.configureProviderPomDependencies) {
              configurer.configureProviderPomDependencies(args.optionalDependencies, args.props);
            }
            break;
          }
          case 'configure_application_yaml': {
            if (args.isBootstrap) {
              if (configurer.configureBootstrapYaml) {
                configurer.configureBootstrapYaml(args.yaml, args.props);
              }
            } else {
              if (configurer.configureApplicationYaml) {
                configurer.configureApplicationYaml(args.yaml, args.env, args.props, args.isBootstrap);
              }
            }
            break;
          }
          default: {
            break
          }
        }
      }
    }
  })
}

module.exports = configurers;
