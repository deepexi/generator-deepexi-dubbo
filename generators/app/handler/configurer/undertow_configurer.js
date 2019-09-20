module.exports = {
  key: 'undertow',
  fn: {
    configureProviderPomDependencies (optionalDependencies) {
      optionalDependencies.push({
        dependency: [
          { groupId: 'org.springframework.boot' },
          { artifactId: 'spring-boot-starter-undertow' }
        ]
      })
    }
  }
}
