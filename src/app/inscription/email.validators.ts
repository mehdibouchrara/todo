import { AbstractControl, ValidationErrors } from '@angular/forms';
export class EmailValidators {
    static emailUnique(control: AbstractControl): Promise<ValidationErrors | null> 
    {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                let email = control.get('email');
                
                if(email.value === "admin@gmail.com")
                    resolve({emailUnique:true}) 
                else
                    resolve(null) 
            },2000);
        });
    }
}