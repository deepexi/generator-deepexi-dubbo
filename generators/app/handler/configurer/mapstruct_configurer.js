const _ = require('lodash');

module.exports = {
  key: 'mapstruct',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'org.mapstruct' },
          { artifactId: 'mapstruct-jdk8' },
          { version: '1.2.0.Final' }
        ]
      })
      optionalDependencies.push({
        dependency: [
          { groupId: 'org.mapstruct' },
          { artifactId: 'mapstruct-processor' },
          { version: '1.2.0.Final' }
        ]
      })
    }
  }
}
