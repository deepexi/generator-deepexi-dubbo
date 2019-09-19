package ${basePackage}.domain.query;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Data
public class ValidDemoQuery {

    private String name;

    @Pattern(regexp = "admin|member", message = "角色必须为admin或member")
    private String role;

    @Min(value = 1, message = "年龄必须大于1岁！")
    private String age;

}
