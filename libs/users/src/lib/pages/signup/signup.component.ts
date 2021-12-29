import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '@bluebits/users';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {
  editmode = false;
  form: FormGroup;
  isSubmitted = false;
  currentUserId: string;
  constructor(  private formBuilder: FormBuilder,
    private messageService: MessageService,
    private usersService: UsersService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._initUserForm();
  }

  private _initUserForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      isAdmin: [''],
      street: [''],
      apartment: [''],
      zip: [''],
      city: [''],
      country: ['']
    });
  }

  get userForm() {
    return this.form.controls;
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      return
    }
    const user:User={
      id: this.currentUserId,
      name:this.userForm.name.value,
      email:this.userForm.email.value,
      password:this.userForm.password.value,
      phone:this.userForm.phone.value,
      street:this.userForm.street.value,
      apartment:this.userForm.apartment.value,
      zip:this.userForm.zip.value,
      city:this.userForm.city.value,
    };
    if(this.editmode){
      this.updateuser(user);
    }else{
      this._addUser(user);
    }

  }

  private updateuser(user){

  }
  private _addUser(user){
   
      this.usersService.registerUser(user).subscribe(
        (user: User) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `User ${user.name} is created!`
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'User is not created!'
          });
        }
      );
    
  }

  onCancle() {
    this.location.back();
  }

}
