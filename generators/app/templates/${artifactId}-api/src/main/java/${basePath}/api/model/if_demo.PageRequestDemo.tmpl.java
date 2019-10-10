package ${basePackage}.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiParam;
import lombok.Data;
import java.io.Serializable;

@Data
public abstract class PageRequestDemo implements Serializable {

    @ApiParam(value = "index", example = "1")
    private Integer index = 1;

    @ApiParam(value = "size", example = "10")
    private Integer size = 10;

    @JsonIgnore
    @ApiParam(hidden = true)
    public Integer getOffset() {
        return getSize() * (getIndex() - 1);
    }

    @JsonIgnore
    @ApiParam(hidden = true)
    public Integer getLimit() {
        return getSize();
    }

}



