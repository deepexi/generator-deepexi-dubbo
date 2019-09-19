'use strict'
/* eslint-disable no-undef */

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

describe('generate app', () => {
  before(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        groupId: 'com.deepexi',
        artifactId: 'foo-service',
        basePackage: 'com.deepexi.foo',
      });
  });

  describe('should exists files', () => {
    it('base', () => {
      assert.file('.gitignore')
      assert.file('Dockerfile')
      assert.file('build.sh')
      assert.file('commitlint.config.js')
      assert.file('common.sh')
      assert.file('entrypoint.sh')
      assert.file('filebeat.yml')
      assert.file('package.json')
      assert.file('pom.xml')
      assert.file('README.md')
      assert.file('run.sh')
      assert.file('scaffold.md')
      assert.file('start-code.sh')
      assert.file('start-fb.sh')
    })

    describe('foo-service-api', () => {
      it('base', () => {
        assert.file('foo-service-api/pom.xml')
      })
      it('java', () => {
        assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/dto/.gitkeep')
        assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/query/.gitkeep')
        assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/vo/.gitkeep')
      })
    })

    describe('foo-service-provider', () => {
      it('base', () => {
        assert.file('foo-service-provider/pom.xml')
      })
      it('resources', () => {
        assert.file('foo-service-provider/src/main/resources/application.yml')
        assert.file('foo-service-provider/src/main/resources/application-local.yml')
        assert.file('foo-service-provider/src/main/resources/application-dev.yml')
        assert.file('foo-service-provider/src/main/resources/application-qa.yml')
        assert.file('foo-service-provider/src/main/resources/application-prod.yml')
      })
      it('java', () => {
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/StartupApplication.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/api/impl/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/web/ApplicationErrorAttributes.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/web/ReturnValueConfigurer.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/constant/BizCode.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/controller/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/converter/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/entity/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/query/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/vo/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/enums/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/BizErrorResponseStatus.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataExistException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataNotExistException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataNotFoundException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataPermissionException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/DataRepetitionException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/exception/common/UnableOperateException.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/extension/web/Payload.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/mapper/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/remote/.gitkeep')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/impl/.gitkeep')
      })
    })
  });
});

describe('generate demo', () => {
  before(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({
        groupId: 'com.deepexi',
        artifactId: 'foo-service',
        basePackage: 'com.deepexi.foo',
        demo: true
      });
  });

  describe('foo-service-api', () => {
    it('base', () => {
      assert.file('foo-service-api/pom.xml')
    })
    it('java', () => {
      assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/dto/DubboDemoDTO.java')
      assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/query/DubboDemoQuery.java')
      assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/PageDemo.java')
      assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/domain/PageRequestDemo.java')
      assert.file('foo-service-api/src/main/java/com/deepexi/foo/api/DubboDemoRemoteServiceApi.java')
    })
  })

  describe('foo-service-provider', () => {
    it('java', () => {
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/api/impl/DubboDemoRemoteServiceApiImpl.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/controller/DubboDemoController.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/DemoDTO.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/vo/DemoVO.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/DemoService.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/DubboDemoService.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/impl/DemoServiceImpl.java')
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/impl/DubboDemoServiceImpl.java')
    })
  })
});

describe('optional dependencies', () => {
  describe('discovery', () => {
    describe('zookeeper', () => {
      before(() => {
        return helpers
          .run(path.join(__dirname, '../app'))
          .withPrompts({
            groupId: 'com.deepexi',
            artifactId: 'foo-service',
            basePackage: 'com.deepexi.foo',
            discovery: 'zookeeper',
            demo: true
          });
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
        return helpers
          .run(path.join(__dirname, '../app'))
          .withPrompts({
            groupId: 'com.deepexi',
            artifactId: 'foo-service',
            basePackage: 'com.deepexi.foo',
            discovery: 'nacos',
            demo: true
          });
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
    before(() => {
      return helpers
        .run(path.join(__dirname, '../app'))
        .withPrompts({
          groupId: 'com.deepexi',
          artifactId: 'foo-service',
          basePackage: 'com.deepexi.foo',
          converter: 'mapstruct',
          demo: true
        });
    });

    it('should exists files', () => {
      assert.file('foo-service-provider/src/main/java/com/deepexi/foo/converter/DemoConverter.java')
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
      assert.fileContent([
        ['foo-service-provider/src/main/java/com/deepexi/foo/controller/DemoController.java', /convert\.dto2vo\(service\.get/]
      ])
    });
  });

  describe('db', () => {
    describe('orm', () => {
      describe('mybatis-plus', () => {
        before(() => {
          return helpers
            .run(path.join(__dirname, '../app'))
            .withPrompts({
              groupId: 'com.deepexi',
              artifactId: 'foo-service',
              basePackage: 'com.deepexi.foo',
              db: 'mysql',
              orm: 'mybatis-plus',
              demo: true
            });
        });

        it('should have dependency', () => {
          assert.fileContent([
            ['foo-service-provider/pom.xml', /<groupId>com.baomidou<\/groupId>/],
            ['foo-service-provider/pom.xml', /<artifactId>mybatis-plus-boot-starter<\/artifactId>/],
            ['foo-service-provider/pom.xml', /<version>3\.1\.2<\/version>/]
          ])
        });

        it('should have properties', () => {
          assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application.yml')).mybatis);
        });

        it('should exist files', () => {
          assert.file('foo-service-provider/src/main/resources/mapper/.gitkeep')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationMetaObjectHandler.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/controller/CrudDemoController.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/CrudDemoService.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/impl/CrudDemoServiceImpl.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/CrudDemoService.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/mapper/CrudDemoMapper.java')
          assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/entity/CrudDemoDO.java')
        });

        it('should exist contents', () => {
          assert.fileContent([
            ['foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java', /ApplicationMetaObjectHandler.RuntimeData/],
            ['foo-service-provider/src/main/java/com/deepexi/foo/config/ApplicationConfiguration.java', /PaginationInterceptor/]
          ])
        });
      });
    });

    describe('pool', () => {
      describe('druid', () => {
        before(() => {
          return helpers
            .run(path.join(__dirname, '../app'))
            .withPrompts({
              groupId: 'com.deepexi',
              artifactId: 'foo-service',
              basePackage: 'com.deepexi.foo',
              db: 'mysql',
              dbPool: 'druid',
              demo: true
            });
        });

        it('should have dependency', () => {
          assert.fileContent([
            ['foo-service-provider/pom.xml', /<groupId>com.alibaba<\/groupId>/],
            ['foo-service-provider/pom.xml', /<artifactId>druid-spring-boot-starter<\/artifactId>/],
            ['foo-service-provider/pom.xml', /<version>1\.1\.17<\/version>/]
          ])
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
        return helpers
          .run(path.join(__dirname, '../app'))
          .withPrompts({
            groupId: 'com.deepexi',
            artifactId: 'foo-service',
            basePackage: 'com.deepexi.foo',
            circuit: 'hystrix',
            demo: true
          });
      });

      it('should have dependency', () => {
        assert.fileContent([
          ['foo-service-provider/pom.xml', /<groupId>org\.springframework\.cloud<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>spring-cloud-starter-netflix-hystrix<\/artifactId>/]
        ])
      });

      it('should exist contents', () => {
        assert.fileContent([
          ['foo-service-provider/src/main/java/com/deepexi/foo/StartupApplication.java', /@EnableHystrix/],
          ['foo-service-provider/src/main/java/com/deepexi/foo/controller/DubboDemoController.java', /@HystrixCommand\(fallbackMethod/]
        ])
      });
    });
  });

  describe('mq', () => {
    describe('rabbitmq', () => {
      before(() => {
        return helpers
          .run(path.join(__dirname, '../app'))
          .withPrompts({
            groupId: 'com.deepexi',
            artifactId: 'foo-service',
            basePackage: 'com.deepexi.foo',
            mq: 'rabbitmq',
            demo: true
          });
      });

      it('should exists files', () => {
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/controller/MQDemoController.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/RabbitMQConfiguration.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/config/RabbitMQDemoConfiguration.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/domain/dto/MQDemoDTO.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/MQDemoService.java')
        assert.file('foo-service-provider/src/main/java/com/deepexi/foo/service/impl/RabbitMQDemoServiceImpl.java')
      });

      it('should have dependency', () => {
        assert.fileContent([
          ['foo-service-provider/pom.xml', /<groupId>org\.springframework\.boot<\/groupId>/],
          ['foo-service-provider/pom.xml', /<artifactId>spring-boot-starter-amqp<\/artifactId>/]
        ])
      });

      it('should have properties', () => {
        assert(yaml.safeLoad(fs.readFileSync('foo-service-provider/src/main/resources/application-local.yml')).spring.rabbitmq);
      });
    });
  });
});
