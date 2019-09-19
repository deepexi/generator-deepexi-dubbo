package ${basePackage}.api.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class DubboDemoDTO implements Serializable {

    private String id;

    private String name;

}

