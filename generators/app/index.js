'use strict'
const path = require('path');
const Trigger = require('yo-power-generator').Trigger;

const args0 = {
  groupId: {
    prompting: { type: 'input', message: '请输入你的group id', default: 'com.deepexi', require: true },
    option: { desc: 'group id', type: String, default: 'com.deepexi' }
  },
  artifactId: {
    prompting: { type: 'input', message: '请输入你的artifact id', default: 'deepexi-dubbo', require: true },
    option: { desc: 'artifact id', type: String, default: 'deepexi-dubbo' }
  },
  basePackage: {
    prompting: { type: 'input', message: '请输入你的基础包路径（为空则使用group id）' },
    option: { desc: '基础包路径（为空则使用group id）', type: String, default: '' }
  },
  mavenUrl: {
    prompting: {
      type: 'input',
      message: '请输入你的maven仓库地址',
      default: 'http://nexus.deepexi.top/repository/maven-public/'
    },
    option: { desc: 'maven仓库url', type: String, default: 'http://nexus.deepexi.top/repository/maven-public/' }
  },
  discovery: {
    prompting: { type: 'list', choices: ['zookeeper', 'nacos'], message: '请选择你使用的注册中心' },
    option: { desc: '注册中心', type: String, default: 'zookeeper' }
  },
  converter: {
    prompting: { type: 'list', choices: ['mapstruct', 'spring-converter', 'none'], message: '请选择你使用的对象映射类型' },
    option: { desc: '对象映射', type: String, default: 'none' }
  },
  db: {
    prompting: {
      type: 'list',
      choices: ['mysql', 'none'],
      message: '请选择你使用的数据库'
    },
    option: { desc: '数据库', type: String, default: 'none' },
    child: {
      dbPool: {
        prompting: { type: 'list', choices: ['druid', 'default'], message: '请选择你使用的数据库连接池' },
        option: { desc: '数据库连接池', type: String, default: 'none' },
        callbacks: {
          trigger: [
            new Trigger.AnyAnswerTrigger('db', 'mysql')
          ]
        }
      },
      orm: {
        prompting: { type: 'list', choices: ['mybatis-plus', 'none'], message: '请选择你使用的ORM框架' },
        option: { desc: 'ORM框架', type: String, default: 'none' },
        callbacks: {
          trigger: [
            new Trigger.AnyAnswerTrigger('db', 'mysql')
          ]
        }
      }
    }
  },
  circuit: {
    prompting: { type: 'list', choices: ['hystrix', 'none'], message: '请选择你使用的熔断器类型' },
    option: { desc: '熔断降级', type: String, default: 'none' }
  },
  mq: {
    prompting: {
      type: 'list',
      choices: ['rabbitmq', 'none'],
      message: '请选择你使用的消息中间件类型'
    },
    option: { desc: '消息中间件', type: String, default: 'none' }
  },
  templateEngine: {
    prompting: { type: 'list', choices: ['thymeleaf', 'none'], message: '请选择你使用的模板引擎' },
    option: { desc: '模板引擎', type: String, default: 'none' }
  },
  webServer: {
    prompting: { type: 'list', choices: ['tomcat', 'undertow'], message: '请选择你使用的Web服务器（默认Tomcat）' },
    option: { desc: 'Web服务器', type: String, default: 'tomcat' }
  },
  config: {
    prompting: { type: 'list', choices: ['spring-cloud-config', 'apollo', 'none'], message: '请选择你使用的配置中心' },
    option: { desc: '配置中心', type: String, default: 'none' }
  },
  demo: {
    prompting: {
      type: 'confirm',
      message: '是否为你生成相关的demo文件（默认No）',
      default: false
    },
    option: { desc: '生成demo', type: Boolean, default: false }
  }
};

module.exports = require('yo-power-generator').getGenerator(args0, {
  description: '该脚手架整合了 Dubbo + SpringBoot，并提供一些开源的框架与工具与对应的 Demo 案例！',
  handlerDir: path.join(__dirname, 'handler'),
  templateDir: path.join(__dirname, 'templates'),
  afterPropsSet (props) {
    props.version = require('../../package.json').version
    props.cli = `yo generator-deepexi-dubbo -c ${props.cli}`;

    props.conditions = {};
    if (props.db !== 'none') {
      if (props.orm !== 'none') {
        props.conditions[props.orm] = true;
        if (props.demo) {
          props.conditions.crud = true;
        }
      }
    }

    props.conditions[props.mq] = (props.mq !== 'none');
    props.conditions[props.converter] = (props.converter !== 'none');
    props.conditions[props.config] = (props.config !== 'none');
    props.conditions[props.templateEngine] = (props.templateEngine !== 'none');
    if (props.circuit !== 'none') {
      props.conditions['has-circuit'] = true;
    } else {
      props.conditions['no-circuit'] = true;
    }
    if (props.converter !== 'none') {
      props.conditions['has-converter'] = true;
    } else {
      props.conditions['no-converter'] = true;
    }

    if (!props.basePackage) {
      props.basePackage = props.groupId;
    }

    props.basePath = props.basePackage.replace(/\./g, '/');
    props.basic = true;
  }
});
