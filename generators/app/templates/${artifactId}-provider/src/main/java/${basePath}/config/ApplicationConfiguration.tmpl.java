package ${basePackage}.config;

<%
    if(conditions['mybatis-plus']){
        print(`import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;`)
    }
%>
<%
    if(conditions['spring-converter']){
        print(`import org.springframework.beans.factory.annotation.Autowired;\n`)
        print(`import org.springframework.beans.factory.InitializingBean;\n`)
        print(`import ${basePackage}.util.ConverterUtils;\n`)
        print(`import org.springframework.core.convert.ConversionService;`)
    }
%>
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
<%
    if(conditions['spring-converter']){
        print(`public class ApplicationConfiguration implements InitializingBean {`)
    } else {
        print(`public class ApplicationConfiguration {`)
    }
%>
    <%
        if(conditions['spring-converter']){
            print(`
    @Autowired
    private ConversionService conversionService;

    @Override
    public void afterPropertiesSet() {
        ConverterUtils.setConversionService(conversionService);
    }
            `)
        }
    %>
    <%
        if(conditions['mybatis-plus']){
            print(`
    @Bean
    public ApplicationMetaObjectHandler.RuntimeData runtimeData() {
        return new ApplicationMetaObjectHandler.RuntimeData() {
            @Override
            public String getUserId() {
                return "1";
            }

            @Override
            public String getTenantId() {
                return "1";
            }
        };
    }

    @Bean
    public PaginationInterceptor paginationInterceptor(){
        return new PaginationInterceptor();
    }
            `)
        }
    %>

}

