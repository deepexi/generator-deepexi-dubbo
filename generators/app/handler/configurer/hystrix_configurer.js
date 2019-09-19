const _ = require('lodash');

module.exports = {
  key: 'hystrix',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'org.springframework.cloud' },
          { artifactId: 'spring-cloud-starter-netflix-hystrix' }
        ]
      })
    }
  }
}
