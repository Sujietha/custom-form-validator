import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      comparepassword: ['', comparepassword]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

function comparepassword(control: AbstractControl): ValidationErrors {
  if (control.parent != undefined) {
    var password: string = control.parent.get('password').value;
    var cpassword: string = control.parent.get("comparepassword").value;
    if (password !== cpassword) {
      return { matchPassword: true };
    }
  }
  return null;
}
