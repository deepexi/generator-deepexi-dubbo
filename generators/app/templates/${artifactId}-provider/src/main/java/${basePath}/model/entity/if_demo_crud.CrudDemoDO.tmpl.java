package ${basePackage}.model.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("demo")
@Data
public class CrudDemoDO {

    @TableId(type = IdType.AUTO)
    private Long id;

    private String name;

}
