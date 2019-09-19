package ${basePackage}.api;

import ${basePackage}.api.domain.PageDemo;
import ${basePackage}.api.domain.dto.DubboDemoDTO;
import ${basePackage}.api.domain.query.DubboDemoQuery;

public interface DubboDemoRemoteServiceApi {

    PageDemo<DubboDemoDTO> listPage(DubboDemoQuery query);

    DubboDemoDTO get(String id);

}
