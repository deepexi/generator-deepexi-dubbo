package ${basePackage}.service;

import ${basePackage}.domain.dto.MQDemoDTO;

public interface MQDemoService {

    void produce(MQDemoDTO dto);

    void consume(MQDemoDTO dto);

}
