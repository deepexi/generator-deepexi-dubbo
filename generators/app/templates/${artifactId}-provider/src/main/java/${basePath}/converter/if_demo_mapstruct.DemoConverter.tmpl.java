package ${basePackage}.converter;

import ${basePackage}.domain.dto.DemoDTO;
import ${basePackage}.domain.vo.DemoVO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DemoConverter {

    DemoVO dto2vo(DemoDTO dto);

}
