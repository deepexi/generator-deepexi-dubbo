package ${basePackage}.controller;

import ${basePackage}.converter.DemoConverter;
import ${basePackage}.domain.vo.DemoVO;
import ${basePackage}.domain.query.ValidDemoQuery;
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

@RestController
@RequestMapping("demo")
@Payload
public class DemoController {

    @Autowired
    private DemoService service;

    @Autowired
    private DemoConverter convert;

    @GetMapping("greeting")
    public String sayHello() {
        return service.sayHello();
    }

    @GetMapping("convert")
    public DemoVO doConvert() {
        return convert.dto2vo(service.get());
    }

    @GetMapping("biz-error")
    public void bizerror() {
        throw new DataExistException("Demo数据已存在");
    }

   @GetMapping("valid")
    public String valid(@Valid ValidDemoQuery query, BindingResult result) {
        if (result.hasErrors()) {
            for (FieldError fieldError : result.getFieldErrors()) {
                System.out.println(fieldError.getDefaultMessage());
            }
            return "fail";
        }
        return "success";
    }

}
