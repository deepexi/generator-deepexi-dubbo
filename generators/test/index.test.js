'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */

const _ = require('lodash');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const getExecutor = (answers) => {
  return helpers
    .run(path.join(__dirname, '../app'))
    .withPrompts({
      groupId: 'com.deepexi',
      artifactId: 'foo-service',
      basePackage: 'com.deepexi.foo',
      ...answers
    });
};

const assertFileContent = (file, regex) => {
  const arr = [];
  if (_.isArray(regex)) {
    regex.forEach(v => {
      arr.push([file, v]);
    });
  }
  assert.fileContent(arr);
};

const assertFiles = (files) => {
  files.forEach(file => assert.file(file));
};

describe('generate app', () => {
  before(() => {
    return getExecutor();
  });

  describe('should exists files', () => {
    it('base', () => {
      assertFiles([
        '.gitignore',
        'Dockerfile',
        'build.sh',
        'commitlint.config.js',
        'common.sh',
        'entrypoint.sh',
        'filebeat.yml',
        'package.json',
        'pom.xml',
        'README.md',
        'run.sh',
        'scaffold.md',
        'start-code.sh',
        'start-fb.sh'
      ]);
    })

    describe('foo-service-api', () => {
      it('base', () => {
        assertFiles(['foo-service-api/pom.xml']);
      })
      it('java', () => {
        assertFiles([
          'foo-service-api/src/main/java/com/deepexi/foo/api/domain/dto/.gitkeep',
          'foo-service-api/src/main/java/com/deepexi/foo/api/domain/query/.gitkeep',
          'foo-service-api/src/main/java/com/deepexi/foo/api/domain/vo/.gitkeep'
        ]);
      })
    })

    describe('foo-service-provider', () => {
      it('base', () => {
        assertFiles(['foo-service-provider/pom.xml']);
      })
      it('resources', () => {
        assertFiles([
          'foo-service-provider/src/main/resources/application.yml',
          'foo-service-provider/src/main/resources/application-local.yml',
          'foo-service-provider/src/main/resources/application-dev.yml',
          'foo-service-provider/src/main/resources/application-qa.yml',
          'foo-service-provider/src/main/resources/application-prod.yml'
        ]);
      })
      it('java', () => {
        assertFiles([
          'foo-service-provider/src/main/java/com/deepexi/foo/StartupApplication.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/api/impl/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/web/ApplicationErrorAttributes.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/web/ReturnValueConfigurer.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/constant/BizCode.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/controller/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/converter/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/domain/entity/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/domain/query/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/domain/vo/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/enums/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/BizErrorResponseStatus.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataExistException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataNotExistException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataNotFoundException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataPermissionException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataRepetitionException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/exception/common/UnableOperateException.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/extension/web/Payload.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/mapper/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/remote/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/util/.gitkeep',
          'foo-service-provider/src/main/java/com/deepexi/foo/service/impl/.gitkeep'
        ]);
      })
    })
  });
});

describe('generate demo', () => {
  before(() => {
    return getExecutor({ demo: true });
  });

  describe('foo-service-api', () => {
    it('base', () => {
      assertFiles(['foo-service-api/pom.xml']);
    })
    it('java', () => {
      assertFiles([
        'foo-service-api/src/main/java/com/deepexi/foo/api/domain/dto/DubboDemoDTO.java',
        'foo-service-api/src/main/java/com/deepexi/foo/api/domain/query/DubboDemoQuery.java',
        'foo-service-api/src/main/java/com/deepexi/foo/api/domain/PageDemo.java',
        'foo-service-api/src/main/java/com/deepexi/foo/api/domain/PageRequestDemo.java',
        'foo-service-api/src/main/java/com/deepexi/foo/api/DubboDemoRemoteServiceApi.java'
      ]);
    })
  })

  describe('foo-service-provider', () => {
    it('java', () => {
      assertFiles([
        'foo-service-provider/src/main/java/com/deepexi/foo/api/impl/DubboDemoRemoteServiceApiImpl.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/controller/DubboDemoController.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/DemoDTO.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/domain/vo/DemoVO.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/service/DemoService.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/service/DubboDemoService.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/service/impl/DemoServiceImpl.java',
        'foo-service-provider/src/main/java/com/deepexi/foo/service/impl/DubboDemoServiceImpl.java'
      ]);
    })
  })
});

describe('optional dependencies', () => {
  describe('discovery', () => {
    describe('zookeeper', () => {
      before(() => {
        return getExecutor({ discovery: 'zookeeper', demo: true });
      });

      it('should have dependency', () => {
        assert.fileContent([
          ['foo-service-provider/pom.xml', /<groupId>com\.101tec<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>zkclient<\/artifactId>/],
          ['foo-service-provider/pom.xml', /<version>0\.10<\/version>/]
        ])
      });

      it('should have properties', () => {
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-local.yml')).spring.dubbo.registry.address === 'zookeeper://127.0.0.1:2181');
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-prod.yml')).spring.dubbo.registry.address === 'zookeeper://127.0.0.1:2181');
      });
    });
    describe('nacos', () => {
      before(() => {
        return getExecutor({ discovery: 'nacos', demo: true });
      });
      it('should have dependency', () => {
        assert.fileContent([
          ['foo-service-provider/pom.xml', /<groupId>com\.alibaba\.nacos<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>nacos-client<\/artifactId>/],
          ['foo-service-provider/pom.xml', /<version>1\.0\.0<\/version>/],
          ['foo-service-provider/pom.xml', /<groupId>com\.alibaba<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>dubbo-registry-nacos<\/artifactId>/],
          ['foo-service-provider/pom.xml', /<version>0\.0\.2<\/version>/]
        ])
      });

      it('should have properties', () => {
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-local.yml')).spring.dubbo.registry.address === 'nacos://127.0.0.1:8848');
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-prod.yml')).spring.dubbo.registry.address === 'nacos://127.0.0.1:8848');
      });
    });
  });

  describe('converter', () => {
    describe('mapstruct', () => {
      before(() => {
        return getExecutor({ converter: 'mapstruct', demo: true });
      });

      it('should exists files', () => {
        assertFiles([
          'foo-service-provider/src/main/java/com/deepexi/foo/converter/DemoConverter.java'
        ]);
      });

      it('should have dependency', () => {
        assert.fileContent([
          ['foo-service-provider/pom.xml', /<groupId>org\.mapstruct<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>mapstruct-jdk8<\/artifactId>/],
          ['foo-service-provider/pom.xml', /<version>1\.2\.0\.Final<\/version>/],
          ['foo-service-provider/pom.xml', /<groupId>org\.mapstruct<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>mapstruct-processor<\/artifactId>/],
          ['foo-service-provider/pom.xml', /<version>1\.2\.0\.Final<\/version>/]
        ])
      });

      it('should exist contents', () => {
        assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java', [
          'convert.dto2vo(service.get'
        ]);
      });
    });

    describe('spring-converter', () => {
      before(() => {
        return getExecutor({ converter: 'spring-converter', demo: true });
      });

      it('should exists files', () => {
        assertFiles([
          'foo-service-provider/src/main/java/com/deepexi/foo/config/web/ConverterConfigurer.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/converter/DemoDTO2OtherVOConverter.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/util/ConverterUtils.java'
        ]);
      });

      it('should exist contents', () => {
        assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java', [
          'return convert(service.get(),OtherVO.class);'
        ]);
        assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java', [
          'public class ApplicationConfiguration implements InitializingBean {'
        ]);
      });
    });
  });

  describe('db', () => {
    describe('orm', () => {
      describe('mybatis-plus', () => {
        before(() => {
          return getExecutor({ db: 'mysql', orm: 'mybatis-plus', demo: true });
        });

        it('should have dependency', () => {
          assertFileContent('foo-service-provider/pom.xml', [
            'mybatis-plus-boot-starter'
          ]);
        });

        it('should have properties', () => {
          assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application.yml')).mybatis);
        });

        it('should exist files', () => {
          assertFiles([
            'foo-service-provider/src/main/resources/mapper/.gitkeep',
            'foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationMetaObjectHandler.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/controller/CrudDemoController.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/service/CrudDemoService.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/service/impl/CrudDemoServiceImpl.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/service/CrudDemoService.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/mapper/CrudDemoMapper.java',
            'foo-service-provider/src/main/java/com/deepexi/foo/domain/entity/CrudDemoDO.java'
          ]);
        });

        it('should exist contents', () => {
          assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java', [
            'ApplicationMetaObjectHandler.RuntimeData',
            'PaginationInterceptor'
          ]);
        });
      });
    });

    describe('pool', () => {
      describe('druid', () => {
        before(() => {
          return getExecutor({ db: 'mysql', dbPool: 'druid', demo: true });
        });

        it('should have dependency', () => {
          assertFileContent('foo-service-provider/pom.xml', [
            '<artifactId>druid-spring-boot-starter</artifactId>'
          ]);
        });

        it('should have properties', () => {
          assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application.yml')).spring.datasource.druid);
          assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application.yml')).spring.datasource.type);
        });
      });
    });
  });

  describe('circuit', () => {
    describe('hystrix', () => {
      before(() => {
        return getExecutor({ circuit: 'hystrix', demo: true });
      });

      it('should have dependency', () => {
        assertFileContent('foo-service-provider/pom.xml', [
          '<artifactId>spring-cloud-starter-netflix-hystrix</artifactId>'
        ]);
      });

      it('should exist contents', () => {
        assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/StartupApplication.java', [
          '@EnableHystrix'
        ]);
        assertFileContent('foo-service-provider/src/main/java/com/deepexi/foo/controller/DubboDemoController.java', [
          '@HystrixCommand(fallbackMethod'
        ]);
      });
    });
  });

  describe('mq', () => {
    describe('rabbitmq', () => {
      before(() => {
        return getExecutor({ mq: 'rabbitmq', demo: true });
      });

      it('should exists files', () => {
        assertFiles([
          'foo-service-provider/src/main/java/com/deepexi/foo/controller/MQDemoController.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/RabbitMQConfiguration.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/config/RabbitMQDemoConfiguration.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/MQDemoDTO.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/service/MQDemoService.java',
          'foo-service-provider/src/main/java/com/deepexi/foo/service/impl/RabbitMQDemoServiceImpl.java'
        ]);
      });

      it('should have dependency', () => {
        assertFileContent('foo-service-provider/pom.xml', [
          '<artifactId>spring-boot-starter-amqp</artifactId>'
        ]);
      });

      it('should have properties', () => {
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-local.yml')).spring.rabbitmq);
      });
    });
  });

  describe('webServer', () => {
    describe('undertow', () => {
      before(() => {
        return getExecutor({ webServer: 'undertow' });
      });

      it('should have dependency', () => {
        assertFileContent('foo-service-provider/pom.xml', [
          '<artifactId>spring-boot-starter-undertow</artifactId>',
          'spring-boot-starter-tomcat'
        ]);
      });
    });
  });
});
