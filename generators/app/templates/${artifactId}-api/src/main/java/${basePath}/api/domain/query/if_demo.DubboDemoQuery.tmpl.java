package ${basePackage}.api.domain.query;

import ${basePackage}.api.domain.PageRequestDemo;
import io.swagger.annotations.ApiParam;
import lombok.Data;

import java.io.Serializable;

@Data
public class DubboDemoQuery extends PageRequestDemo implements Serializable {

    @ApiParam(value = "应用名称")
    private String name;

}
