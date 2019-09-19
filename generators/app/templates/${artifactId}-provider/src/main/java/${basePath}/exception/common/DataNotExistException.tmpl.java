package ${basePackage}.exception.common;

import ${basePackage}.constant.BizCode;
import ${basePackage}.exception.BizErrorResponseStatus;

@BizErrorResponseStatus(BizCode.DATA_NOT_EXIST_ERROR)
public class DataNotExistException extends RuntimeException {

    public DataNotExistException(String message) {
        super(message);
    }

}
