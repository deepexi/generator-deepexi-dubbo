package ${basePackage}.service.impl;

import ${basePackage}.model.entity.CrudDemoDO;
import ${basePackage}.mapper.CrudDemoMapper;
import ${basePackage}.service.CrudDemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrudDemoServiceImpl implements CrudDemoService {

    @Autowired
    private CrudDemoMapper mapper;

    @Override
    public List<CrudDemoDO> listAll() {
        return mapper.selectList(null);
    }

}
