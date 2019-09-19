package ${basePackage}.exception.common;

import ${basePackage}.constant.BizCode;
import ${basePackage}.exception.BizErrorResponseStatus;

@BizErrorResponseStatus(BizCode.DATA_EXIST_ERROR)
public class DataExistException extends RuntimeException {

    public DataExistException(String message) {
        super(message);
    }

}
