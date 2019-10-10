package ${basePackage}.api;

import ${basePackage}.api.model.PageDemo;
import ${basePackage}.api.model.dto.DubboDemoDTO;
import ${basePackage}.api.model.query.DubboDemoQuery;

public interface DubboDemoRemoteServiceApi {

    PageDemo<DubboDemoDTO> listPage(DubboDemoQuery query);

    DubboDemoDTO get(String id);

}
