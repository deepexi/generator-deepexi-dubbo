module.exports = {
  key: 'basic',
  fn: {
    configureProviderPomDependencies (optionalDependencies, answers) {
      const webDependencies = {
        dependency: [
          { groupId: 'org.springframework.boot' },
          { artifactId: 'spring-boot-starter-web' }
        ]
      };
      if (answers.webServer !== 'tomcat') {
        webDependencies.dependency.push({
          exclusions: [
            { exclusion: [{ groupId: 'org.springframework.boot' }, { artifactId: 'spring-boot-starter-tomcat' }] }
          ]
        });
      }
      optionalDependencies.push(webDependencies)
    }
  }
}
