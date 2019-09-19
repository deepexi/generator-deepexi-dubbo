package ${basePackage}.exception.common;

import ${basePackage}.constant.BizCode;
import ${basePackage}.exception.BizErrorResponseStatus;

@BizErrorResponseStatus(BizCode.DATA_PERMISSION_ERROR)
public class DataPermissionException extends RuntimeException {

    public DataPermissionException(String message) {
        super(message);
    }

}
