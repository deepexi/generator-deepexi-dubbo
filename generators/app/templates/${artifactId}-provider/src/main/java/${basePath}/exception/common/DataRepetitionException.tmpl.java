package ${basePackage}.exception.common;

import ${basePackage}.constant.BizCode;
import ${basePackage}.exception.BizErrorResponseStatus;

@BizErrorResponseStatus(BizCode.DATA_REPETITION_ERROR)
public class DataRepetitionException extends RuntimeException {

    public DataRepetitionException(String message) {
        super(message);
    }

}
