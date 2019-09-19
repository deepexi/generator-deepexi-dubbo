package ${basePackage}.exception.common;

import ${basePackage}.constant.BizCode;
import ${basePackage}.exception.BizErrorResponseStatus;

@BizErrorResponseStatus(BizCode.DATA_NOT_FOUND)
public class DataNotFoundException extends RuntimeException {

    public DataNotFoundException(String message) {
        super(message);
    }

}
