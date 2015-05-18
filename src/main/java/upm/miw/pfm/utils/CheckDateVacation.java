package upm.miw.pfm.utils;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.*;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Target({TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = CheckDateVacationValidator.class)
public @interface CheckDateVacation {
    String message() default "Ya existe Vacaciones en ese rango de fechas";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}