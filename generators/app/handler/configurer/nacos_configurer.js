const _ = require('lodash');

module.exports = {
  key: 'nacos',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'com.alibaba' },
          { artifactId: 'dubbo-registry-nacos' },
          { version: '0.0.2' }
        ]
      })
      optionalDependencies.push({
        dependency: [
          { groupId: 'com.alibaba.nacos' },
          { artifactId: 'nacos-client' },
          { version: '1.0.0' }
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
                  address: 'nacos://127.0.0.1:8848'
                }
              }
            }
          });
        }
      }
    }
  }
}
