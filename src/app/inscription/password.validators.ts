import { AbstractControl } from '@angular/forms';
export class PasswordValidators {

    static passwordShouldMatch(control: AbstractControl) {
        let password = control.get('password');
        let repPassword = control.get('repPassword');
        if (password.value!==repPassword.value){
            return{passwordShouldMatch:true};
        }
        return false;
    }
}