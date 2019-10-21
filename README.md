# DeepEXI Dubbo Scaffold Generator

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Build Status](https://travis-ci.org/deepexi/generator-deepexi-dubbo.svg?branch=master)](https://travis-ci.org/deepexi/generator-deepexi-dubbo)
[![codecov](https://codecov.io/gh/deepexi/generator-deepexi-dubbo/branch/master/graph/badge.svg)](https://codecov.io/gh/deepexi/generator-deepexi-dubbo)

[npm-image]: https://img.shields.io/npm/v/generator-deepexi-dubbo.svg
[npm-url]: https://www.npmjs.com/package/generator-deepexi-dubbo
[download-image]: https://img.shields.io/npm/dm/generator-deepexi-dubbo.svg
[download-url]: https://www.npmjs.com/package/generator-deepexi-dubbo

此脚手架生成器基于[Yeoman](https://yeoman.io/)构建。

[CHANGELOG](./CHANGELOG.md)

## How To

### Getting Started

#### 1. 安装yeoman

```bash
$ npm install -g yo
```

#### 2. 安装generator-deepexi-dubbo

```bash
$ npm install -g generator-deepexi-dubbo
```

#### 3. 创建你的应用

通过交互模式创建

```bash
$ mdir {your_project_name}
$ cd {your_project_name}
$ yo deepexi-dubbo
```

或者使用命令行模式创建

```bash
$ mdir {your_project_name}
$ cd {your_project_name}
$ yo deepexi-dubbo -c
```

更多帮助信息可以通过以下命令查看

```bash
$ yo deepexi-dubbo --help
```

## 功能一览

### 可选项

|  **类型**   |                        |                  |             |           |      |
| :---------: | ---------------------- | ---------------- | ----------- | --------- | ---- |
|  配置中心   | ✅️Apollo                | ☑️Disconfig       | ✅️Spring-Cloud-Config     |           |      |
|  消息队列   | ✅RabbitMQ              | ☑️RocketMQ        | Kafka       |           |      |
|  注册中心   | ✅zookeeper                | ✅nacos           |             |           |      |
|  任务调度   | ☑️ES Job                | ☑️XXL-Job         | ☑️SiaTask    | ☑️Quartz   |      |
|    RDBMS    | ✅MySQL                 | ☑️PG SQL          | ☑️SQL Server |           |      |
|    NoSQL    | ☑️Redis                 | ☑️MongoDB         |             |           |      |
|   连接池    | ✅Druid                 |                  |             |           |      |
|  权限控制   | ☑️Shiro                 | ☑️Spring Security |             |           |      |
| 分布式事务  | ☑️Seata                 |                  |             |           |      |
|     APM     | ☑️SkyWalking            | ☑️Zipkin          | ☑️PinPoint   |           |      |
|  分库分表   | ☑️Sharding-JDBC         | ☑️MyCAT           |             |           |      |
|   服务器    | ✅Tomcat                | ☑️Jetty           | ✅Undertow   |           |      |
|  JSON解析   | ✅Jackson               | ☑️FastJson        | ☑️Gson       |           |      |
|  模板引擎   | ✅Thymeleaf             | ☑️Freemarker      |             |           |      |
|  对象存储   | ☑️AliOSS                | ☑️FastDFS         | ☑️TencentOSS | ☑️QiNiuOSS |      |
|     ORM     | ✅MybatisPlus           | ☑️JPA             |             |           |      |
|  日志系统   | ✅Logback               | ☑️Log4j2          |             |           |      |
| Bean转换器  | ✅SpringMVC Converter   | ✅MapStruct       |             |           |      |
| MVC  | ✅SpringMVC                    |                  |             |           |      |
| WebSocket | ☑️Spring Boot Websocket |
| DeepEXI产品 | ☑️sPaaS                 |                  |             |           |      |

### 固有项

| **类型**  |                     |             |           |               |      |
| :-------: | ------------------- | ----------- | --------- | ------------- | ---- |
| Java版本  | ✅JDK1.8             |             |           |               |      |
| 开发框架  | ✅springfox(swagger) | ✅lombok     | ✅guava    | ✅common-lang3 |      |
| 测试框架  | ✅junit    | ✅️jfairy| ✅mockito | ✅️jacoco | ✅hamcrest      | ☑️mockneat | ☑️mockserver |
| 部署相关  | ✅docker             | ✅filebeat   |           |               |      |
| 开发相关 |  ✅devtools           |             |           |               |      |
|   其它    | ✅️actuator          | ✅configuration-processor            |           |               |      |


## Development Reference

### 设计参考

**[《阿里巴巴Java开发手册》](https://yq.aliyun.com/download/2719)**

**[《DDD领域驱动设计》]()**

### 工程结构

![各层间领域对象传输规范](https://user-gold-cdn.xitu.io/2019/9/30/16d7fff2a09e70b2?w=620&h=643&f=png&s=53825)

```
.
├── 1.docs  // 与项目相关的文档
│   ├── guides  // 指导文档
│   │   ├── dev_reference.md
│   │   ├── quickly_start.md
│   │   └── reference.md
│   └── sql     // 数据库sql脚本
│       └── v1.0.0
├── deepexi-dubbo-api
│   ├── pom.xml
│   └── src
│       └── main
│           └── java
│               └── com
│                   └── deepexi
│                       └── api                 // RPC-API层对外暴露的声明式接口，以 XXXApi 结尾
│                           └── model           // API层方法入参与出参模型
│                               └── dto         // 数据传输对象，供其它服务 RPC 调用
│                               └── vo          // 显示层对象，供其它服务  HTTP  调用
│                               └── query       // 数据查询对象
├── deepexi-dubbo-provider
│   ├── pom.xml
│   └── src
│       └── main
│           ├── java
│           │   └── com
│           │       └── deepexi
│           │           ├── api         // RPC-API层对外暴露的声明式接口实现，以 XXXApiImpl 结尾
│           │           │   └── impl    
│           │           ├── aop         // 切面
│           │           ├── config      // 应用相关配置
│           │           │   └── web
│           │           ├── constant    // 常量定义
│           │           ├── controller  // 请求处理web层
│           │           ├── converter   // bean转换器
│           │           ├── model       // 业务各层方法入参与出参模型
│           │           │   ├── dto     // 数据传输对象（data transfer object）
│           │           │   ├── entity  // 数据源对象（do）
│           │           │   ├── query   // 查询对象
│           │           │   └── vo      // 视图对象（view object）
│           │           ├── domain      // 领域逻辑层
│           │           │   ├── entity  // 领域实体
│           │           │   └── manager // 领域实体管理
│           │           ├── enums       // 枚举类
│           │           ├── exception   // 异常类
│           │           ├── extension   // 扩展，如自定义注解
│           │           ├── mapper      // DAO 层
│           │           ├── remote      // 远程服务调用
│           │           ├── repo        // 仓储层（repository）
│           │           ├── service     // 业务逻辑层
│           │           │   └── impl
│           │           ├── util        // 工具类
│           │           └── StartupApplication.java     // 应用启动入口
│           └── resources
│               ├── META-INF
│               │   └── spring-devtools.properties      // devtools元数据
│               ├── application.yml             // 通用配置文件
│               ├── application-dev.yml         // 开发环境配置文件
│               ├── application-local.yml       // 本地环境配置文件
│               ├── application-prod.yml        // 生产环境配置文件
│               ├── application-qa.yml          // 测试环境配置文件
│               ├── bootstrap.yml
│               └── mapper           // mybatis mapper相关
│               └── db               // 数据库 SQL 增量文件
├── .gitignore
├── build.sh        // 项目构建脚本
├── commitlint.config.js
├── common.sh
├── Dockerfile
├── entrypoint.sh
├── filebeat.yml
├── package.json
└── pom.xml
├── README.md       // 帮助文档
├── run.sh          // 运行脚本
├── scaffold.md     // 脚手架信息
├── start-code.sh   // 项目启动脚本
├── start-fb.sh     // filebeat启动脚本
├── LICENSE         // 协议信息
```
  
### 学习文档

- **Dubbo**：Dubbo 是一款高性能、轻量级的开源 Java RPC 框架，你可以点击 → [Dubbo 官方文档](http://dubbo.apache.org/zh-cn/docs/user/preface/background.html) 了解学习它。
- **Mybatis-Plus**：MyBatis-Plus 是一个 MyBatis 的增强工具，简化开发、提高了效率，你可以点击 → [Mybatis-Plus 官方参考手册](https://mp.baomidou.com/guide/) 了解学习它。
- **参数校验**：通常我们需要对请求传递的参数进行校验，你可以通过这篇文章学习它 →  [参数校验](https://juejin.im/post/5d6b5a5af265da03be48f14a)。
- **Lombok**：Lombok 提供了一些注解来帮助我们简化消除一些必须有但显得臃肿的 java 代码，你可以通过这篇文章学习它 → [Lombok ](https://juejin.im/post/5d5c182df265da03f66dc353)。
- **单元测试**：SpringBoot 单元测试与 Mockito 的使用可阅读改篇文章 → [点击这里](https://juejin.im/post/5d62cc3ee51d45620b21c3e9)。
> ... 持续更新 ->  [聪明的杰瑞博客](https://juejin.im/user/5bd1c4886fb9a05cd777874a)

### DDD 领域设计案例

- [工程中心](https://github.com/LinYuanBaoBao/project-center-demo)
