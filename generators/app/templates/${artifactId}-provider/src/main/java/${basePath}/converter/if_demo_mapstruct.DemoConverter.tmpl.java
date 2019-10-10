package ${basePackage}.converter;

import ${basePackage}.model.dto.DemoDTO;
import ${basePackage}.model.vo.DemoVO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DemoConverter {

    DemoVO dto2vo(DemoDTO dto);

}
