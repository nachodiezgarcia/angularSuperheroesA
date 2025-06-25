import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";

const INVALID_NAME = ["invalido", "error", "palabra fea", ":("];
export const heroNameValidators: AsyncValidatorFn = async (control: AbstractControl
): Promise< ValidationErrors | null> => {
    const forbidden = INVALID_NAME.includes(control.value.toLowerCase())
    return forbidden ? {forbiddenName: { value: control.value }} : null;
};