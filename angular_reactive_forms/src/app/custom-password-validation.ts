import { ReturnStatement } from "@angular/compiler";
import { AbstractControl } from "@angular/forms";

export function ValidatePassword(control: AbstractControl){

    if (control.value.toUpperCase() == 'PASSWORD'){
        return {
            weakPassword: true
        }
    }
    return null;

}

