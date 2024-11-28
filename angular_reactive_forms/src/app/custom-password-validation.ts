import { ReturnStatement } from "@angular/compiler";
import { AbstractControl } from "@angular/forms";

export function ValidatePassword(control: AbstractControl){
    //console.log('password value', control.value)

    if (control.value.toUpperCase() == 'PASSWORD'){
        return {
            weakPassword: true
        }
    }
    return null;

}

