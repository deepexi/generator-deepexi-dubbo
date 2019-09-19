# Scaffold参考文档

此项目由[generator-deepexi-dubbo](https://github.com/deepexi/generator-deepexi-dubbo)生成。

如何你有任何问题或优化建议，请到[Github Issues](https://github.com/deepexi/generator-deepexi-dubbo/issues)进行反馈，我们需要你宝贵的意见:-)。

## 项目信息

**工具版本**: ${toolVersion}
**node版本**: ${nodeVersion}
**yeoman版本**: ${yoVersion}
**生成时间**: ${date}
**生成方式**: ${generationType}
**生成参数**: ${propsJson}
**生成命令**: ${cli}

## 设计参考

**[《阿里巴巴Java开发手册》](https://yq.aliyun.com/download/2719)**

**[《DDD领域驱动设计》]()**

## 工程结构

![各层间领域对象传输规范](https://user-gold-cdn.xitu.io/2019/8/26/16cccf2506ff510c?w=620&h=643&f=png&s=53699)

> **工程目录结构会因脚手架生成选项有轻微差别**

**${artifactId}-api**

- ${basePackage}
  - api：(RPC-API层对外暴露的声明式接口，以**XXXApi**结尾)
    - domain： (API层方法入参与出参领域模型)
      - dto：（数据传输对象，供其它服务 RPC 调用）
      - vo：（显示层对象，供其它服务  HTTP  调用）
      - query：（数据查询对象）

------

**${artifactId}-provider**

- ${basePackage}
  - api.impl：(RPC-API层对外暴露的声明式接口实现，以**XXXApiImpl**结尾)
  - aop：（切面）
  - config：（配置）
  - constant：（常量）
  - controller：（请求处理web层）
  - converter：（领域模型对象转换）
  - domain： (各层方法入参与出参领域模型)
    - entity：（数据源对象，即 do）
    - vo：（显示层对象）
    - dto：（数据传输对象）
    - query：（数据查询对象）
  - enums：（枚举值）
  - extension：（扩展，如自定义注解）
  - exception：（异常定义）
  - manager：（通用业务处理层，一些通用能力下沉，如缓存方案、中间件通用处理）
  - mapper：（DAO 层）
  - remote：（远程服务调用）
  - service：（业务逻辑层，推荐采用DDD领域驱动模型设计）
  - util：（工具类方法，与业务无关）
- resource 目录
  - db：（数据库 SQL 增量文件）
  - mapper：（ Mybatis Mapper对应的xml文件）
  - application.yml
  
## 框架技术学习文档

**Dubbo**：Dubbo 是一款高性能、轻量级的开源 Java RPC 框架，你可以点击 → [Dubbo 官方文档](http://dubbo.apache.org/zh-cn/docs/user/preface/background.html) 了解学习它。

**Mybatis-Plus**：MyBatis-Plus 是一个 MyBatis 的增强工具，简化开发、提高了效率，你可以点击 → [Mybatis-Plus 官方参考手册](https://mp.baomidou.com/guide/) 了解学习它。

**参数校验**：通常我们需要对请求传递的参数进行校验，你可以通过这篇文章学习它 →  [参数校验](https://juejin.im/post/5d6b5a5af265da03be48f14a)。

**Lombok**：Lombok 提供了一些注解来帮助我们简化消除一些必须有但显得臃肿的 java 代码，你可以通过这篇文章学习它 → [Lombok ](https://juejin.im/post/5d5c182df265da03f66dc353)。

**单元测试**：SpringBoot 单元测试与 Mockito 的使用可阅读改篇文章 → [点击这里](https://juejin.im/post/5d62cc3ee51d45620b21c3e9)。

> ... 持续更新 ->  [聪明的杰瑞博客](https://juejin.im/user/5bd1c4886fb9a05cd777874a)

### DDD 领域设计 Demo 案例

- [工程中心](https://github.com/LinYuanBaoBao/project-center-demo)

#### .gitkeep

项目生成后，为了维持一些空文件夹的存在，会为这些空文件夹添加一个`.gitkeep`文件，如果不需要了，可以在项目目录下执行以下命令全部清除

```bash
$ find . -name '.gitkeep' | xargs rm
```

#### demo

可以通过以下指令清除所有带有Demo字样的文件

```bash
$ find . -name '*Demo*' | xargs rm
```

#### domain 层

当某业务方法会对外暴露作为 API 层供其它服务调用时，其 domain 层中的 vo、dto、query 出参入参模型定义应从 xxx-provider 项目中提升至 xxx-api 项目，供其它服务引入 jar 包进行调用。
