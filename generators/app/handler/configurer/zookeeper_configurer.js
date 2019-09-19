const _ = require('lodash');

module.exports = {
  key: 'zookeeper',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'com.101tec' },
          { artifactId: 'zkclient' },
          { version: '0.10' },
          {
            exclusions: [
              { exclusion: [{ groupId: 'org.slf4j' }, { artifactId: 'slf4j-log4j12' }] },
              { exclusion: [{ groupId: 'log4j' }, { artifactId: 'log4j' }] }
            ]
          }
        ]
      })
    },
    configureApplicationYaml (yaml, env, props) {
      switch (env) {
        case 'default':
          break;
        default: {
          _.merge(yaml, {
            spring: {
              dubbo: {
                registry: {
                  address: 'zookeeper://127.0.0.1:2181'
                }
              }
            }
          });
        }
      }
    }
  }
}
