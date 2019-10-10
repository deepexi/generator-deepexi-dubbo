const _ = require('lodash');

module.exports = {
  key: 'spring-cloud-config',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'org.springframework.cloud' },
          { artifactId: 'spring-cloud-starter-config' }
        ]
      })
    },
    configureBootstrapYaml (yaml) {
      _.merge(yaml, {
        spring: {
          cloud: {
            config: {
              uri: 'http://localhost:8089/'
            }
          }
        }
      });
    }
  }
}
