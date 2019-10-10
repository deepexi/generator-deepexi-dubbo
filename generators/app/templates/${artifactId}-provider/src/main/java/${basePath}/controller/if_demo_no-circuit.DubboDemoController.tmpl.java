package ${basePackage}.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import ${basePackage}.api.DubboDemoRemoteServiceApi;
import ${basePackage}.api.model.PageDemo;
import ${basePackage}.api.model.dto.DubboDemoDTO;
import ${basePackage}.api.model.query.DubboDemoQuery;
import ${basePackage}.extension.web.Payload;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("demo/dubbo")
@Payload
public class DubboDemoController {

    @Reference(version = "1.0")
    private DubboDemoRemoteServiceApi service;

    @GetMapping("call")
    public PageDemo<DubboDemoDTO> listPage() {
        DubboDemoQuery query = new DubboDemoQuery();
        query.setSize(20);
        return service.listPage(query);
    }

    @GetMapping("fallback")
    public DubboDemoDTO get() {
        return service.get("1");
    }

}
