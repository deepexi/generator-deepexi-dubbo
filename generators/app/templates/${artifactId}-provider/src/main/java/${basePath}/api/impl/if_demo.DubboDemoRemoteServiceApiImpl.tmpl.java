package ${basePackage}.api.impl;

import com.alibaba.dubbo.config.annotation.Service;
import ${basePackage}.api.DubboDemoRemoteServiceApi;
import ${basePackage}.api.domain.PageDemo;
import ${basePackage}.api.domain.dto.DubboDemoDTO;
import ${basePackage}.api.domain.query.DubboDemoQuery;
import ${basePackage}.service.DubboDemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Service(version = "1.0")
public class DubboDemoRemoteServiceApiImpl implements DubboDemoRemoteServiceApi {

    @Autowired
    DubboDemoService service;

    @Override
    public PageDemo<DubboDemoDTO> listPage(DubboDemoQuery query) {
        return service.listPage(query);
    }

    @Override
    public DubboDemoDTO get(String id) {
        return service.get(id);
    }

}
