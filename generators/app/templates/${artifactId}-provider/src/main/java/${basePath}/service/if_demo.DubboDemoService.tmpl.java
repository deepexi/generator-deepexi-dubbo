package ${basePackage}.service;

import ${basePackage}.api.model.PageDemo;
import ${basePackage}.api.model.dto.DubboDemoDTO;
import ${basePackage}.api.model.query.DubboDemoQuery;

public interface DubboDemoService {

    PageDemo<DubboDemoDTO> listPage(DubboDemoQuery query);

    DubboDemoDTO get(String id);

}
