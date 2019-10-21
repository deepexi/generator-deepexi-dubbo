# Quickly Start

## 本地开发

通过IDE运行[StartupApplication](../../${artifactId}-provider/src/main/java/${basePath}/StartupApplication.java)

### Swagger

- **swagger地址**：http://127.0.0.1:8080/swagger-ui.html  
- **swagger json**：http://127.0.0.1:8080/v2/api-docs

### Actuator

- **actuator地址**：[/actuator/health](http://127.0.0.1:15600/actuator/health)

## 构建

### *.jar

```bash
$ mvn clean package -DskipTests
```

### Image

```bash
$ PROJECT_HOME=$PWD \
APP_NAME=${artifactId} \
VERSION=1.0.0 \
sh build.sh
```

或者

```bash
$ PROJECT_HOME=$PWD \
IMAGE_NAME=${artifactId}:v1.0.0 \
sh build.sh
```

## 部署

### 进程启动

```bash
$ mvn clean package
$ java -jar ./${artifactId}-provider/target/app.jar
```

### 容器启动

```bash
$ sh start-code.sh [-bl] [-p port] [-v version]
```

- -b: 是否从本地构建镜像
- -l: 是否在启动后输出容器日志
- -p: 指定容器映射端口号（默认8080）
- -v: 指定构建镜像的版本号（默认1.0.0）

如果需要自定义启动命令，可以自行修改[`run.sh`](../../run.sh)。
