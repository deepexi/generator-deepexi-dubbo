package ${basePackage}.util;

import org.springframework.beans.BeanUtils;
import org.springframework.core.convert.ConversionService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public abstract class ConverterUtils {
    private static ConversionService conversionService;

    public static void setConversionService(ConversionService conversionService) {
        ConverterUtils.conversionService = conversionService;
    }

    public static <FROM, TO> TO convert(FROM from, Class<TO> toClazz) {
        if (conversionService.canConvert(from.getClass(), toClazz)) {
            return conversionService.convert(from, toClazz);
        } else {
            try {
                TO to = toClazz.newInstance();
                BeanUtils.copyProperties(from, to);
                return to;
            } catch (Exception e) {
                // TODO::
                throw new RuntimeException(e);
            }
        }
    }

    public static <FROM, TO> List<TO> convertAll(List<FROM> fromList, Class<TO> toCls) {
        if (fromList == null || fromList.size() == 0) {
            return new ArrayList<>();
        }

        return fromList
                .stream()
                .map(from -> convert(from, toCls)).collect(Collectors.toList());
    }
}
