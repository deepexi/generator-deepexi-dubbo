package ${basePackage}.service;

import ${basePackage}.model.dto.MQDemoDTO;

public interface MQDemoService {

    void produce(MQDemoDTO dto);

    void consume(MQDemoDTO dto);

}
