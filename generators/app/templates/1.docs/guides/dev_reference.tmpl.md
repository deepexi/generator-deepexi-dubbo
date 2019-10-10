# 开发参考

## 工程结构

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
│           │           ├── manager     // 领域逻辑层
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
## Node.JS相关

以下功能均基于Node.JS，使用前请先确保安装了[Node.JS](https://nodejs.org/zh-cn/download/)并在项目根目录下执行`npm install`。

- 通过 `commitlint` + `husky` 自动控制commit规范（安装husky会修改githook，因此需要确保已经执行`git init`）
- 使用 `npm run commit` 通过交互模式提交代码
- 使用 `npm run release` 根据提交记录自动调整版本并生成相应的CHANGELOG

## 学习文档

- **Dubbo**：Dubbo 是一款高性能、轻量级的开源 Java RPC 框架，你可以点击 → [Dubbo 官方文档](http://dubbo.apache.org/zh-cn/docs/user/preface/background.html) 了解学习它。
- **Mybatis-Plus**：MyBatis-Plus 是一个 MyBatis 的增强工具，简化开发、提高了效率，你可以点击 → [Mybatis-Plus 官方参考手册](https://mp.baomidou.com/guide/) 了解学习它。
- **参数校验**：通常我们需要对请求传递的参数进行校验，你可以通过这篇文章学习它 →  [参数校验](https://juejin.im/post/5d6b5a5af265da03be48f14a)。
- **Lombok**：Lombok 提供了一些注解来帮助我们简化消除一些必须有但显得臃肿的 java 代码，你可以通过这篇文章学习它 → [Lombok ](https://juejin.im/post/5d5c182df265da03f66dc353)。
- **单元测试**：SpringBoot 单元测试与 Mockito 的使用可阅读改篇文章 → [点击这里](https://juejin.im/post/5d62cc3ee51d45620b21c3e9)。
> ... 持续更新 ->  [聪明的杰瑞博客](https://juejin.im/user/5bd1c4886fb9a05cd777874a)

## 热部署
Spring Boot DevTools 通过监控项目 .class 字节码文件变化来实现热部署功能，因此在代码被修改后要重新构建项目。

在使用 IntelliJ IDEA 时，您需要构建项目（Ctrl + F9 或 Build→Build Project）。

