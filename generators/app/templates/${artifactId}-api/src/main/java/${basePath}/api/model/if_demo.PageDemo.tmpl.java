package ${basePackage}.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageDemo<T> implements Serializable {

    private Integer total;

    private List<T> rows = new ArrayList<>();

}
