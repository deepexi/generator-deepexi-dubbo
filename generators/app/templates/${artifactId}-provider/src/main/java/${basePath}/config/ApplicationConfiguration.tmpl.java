package ${basePackage}.config;

<%
    if(conditions['mybatis-plus']){
        print(`import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;`)
    }
%>
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfiguration {
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

