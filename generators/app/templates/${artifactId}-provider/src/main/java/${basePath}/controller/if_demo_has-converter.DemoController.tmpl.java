package ${basePackage}.controller;

import ${basePackage}.domain.vo.DemoVO;
import ${basePackage}.domain.query.ValidDemoQuery;
import ${basePackage}.util.ValidationUtils;
import ${basePackage}.exception.common.DataExistException;
import ${basePackage}.extension.web.Payload;
import ${basePackage}.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import javax.validation.Valid;
<%
    if(conditions['mapstruct']){
        print(`import ${basePackage}.converter.DemoConverter;`)
    }
%>
<%
    if(conditions['spring-converter']){
        print(`import static ${basePackage}.util.ConverterUtils.convert;\n`)
        print(`import ${basePackage}.domain.vo.OtherVO;`)
    }
%>

@RestController
@RequestMapping("demo")
@Payload
public class DemoController {

    @Autowired
    private DemoService service;
    <%
        if(conditions['mapstruct']){
            print(`
    @Autowired
    private DemoConverter convert;

    @GetMapping("convert")
    public DemoVO doConvert() {
       return convert.dto2vo(service.get());
    }
            `)
        }
    %>
    <%
        if(conditions['spring-converter']){
            print(`
    @GetMapping("default-convert")
    public DemoVO defaultConvert() {
        return convert(service.get(),DemoVO.class);
    }

    @GetMapping("manual-convert")
    public OtherVO manualConvert() {
        return convert(service.get(),OtherVO.class);
    }
            `)
        }
    %>
    @GetMapping("greeting")
    public String sayHello() {
        return service.sayHello();
    }

    @GetMapping("biz-error")
    public void bizerror() {
        throw new DataExistException("Demo数据已存在");
    }

    @GetMapping("valid")
    public String valid(@Valid ValidDemoQuery query, BindingResult result) {
        BindingResult errors = ValidationUtils.validate(query, ValidDemoQuery.Role.class);
        if (result.hasErrors() || errors.hasErrors()) {
            return "fail";
        }
        return "success";
    }

}
