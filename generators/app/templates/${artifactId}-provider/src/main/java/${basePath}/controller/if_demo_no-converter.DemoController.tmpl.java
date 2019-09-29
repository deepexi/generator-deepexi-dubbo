package ${basePackage}.controller;

import ${basePackage}.domain.vo.DemoVO;
import ${basePackage}.domain.query.ValidDemoQuery;
import ${basePackage}.util.ValidationUtils;
import ${basePackage}.exception.common.DataExistException;
import ${basePackage}.extension.web.Payload;
import ${basePackage}.service.DemoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import javax.validation.Valid;

@RestController
@RequestMapping("demo")
@Payload
public class DemoController {

    @Autowired
    private DemoService service;

    @GetMapping("greeting")
    public String sayHello() {
        return service.sayHello();
    }

    @GetMapping("convert")
    public DemoVO doConvert() {
        DemoVO vo = new DemoVO();
        BeanUtils.copyProperties(service.get(),vo);
        return vo;
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
