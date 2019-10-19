package ${basePackage}.util;

import ${basePackage}.BaseTest;
import io.codearte.jfairy.producer.person.Person;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class DemoTest extends BaseTest {
    @Test
    public void index() {
        assertThat(1 + 2, is(3));
    }

    @Test
    public void fakeWithJFairy() {
        Person person = fairy.person();
        System.out.println(
                String.format(
                        "hi. my name is %s. i'am born in %s",
                        person.getFullName(),
                        person.getDateOfBirth().toString("yyyy-MM-dd")
                ));
    }
}
