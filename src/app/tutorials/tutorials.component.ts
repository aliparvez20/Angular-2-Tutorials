import { Component, Directive, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'my-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
  inputs:['parentData'],
  outputs:['childEvent']
})


export class TutorialsComponent implements OnInit {
    public title = "Hellp Parvez";
    public imageLink = "http://lorempixel.com/400/200/";
    public applyClass = true;
    public applyBlue = true;
    public fname;
    public lname;
    public showElement = true;
    public color = "green";
    public colors = ["red", "green", "yellow"];
    public cone = true;
    public ctwo = true;
    public fontStyle ="italic";
    public fontSize = "30px";
    public parentData:string;
    public childEvent = new EventEmitter<string>();
    public name = "The Flash";

    //Model Driven Form with Formbuilder
    userModelFormFB : FormGroup;

    constructor(private _formBuilder: FormBuilder){

    }
    
    ngOnInit(){
      this.userModelFormFB = this._formBuilder.group({
        name: ['Brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        email:[],
        address: this._formBuilder.group({
          street: [],
          city : [],
          postalCode:[null, [Validators.pattern('^[1-9][0-9]{4}$')]]
        })
      });
    }


    // Model Driven Approach
    public userModelForm = new FormGroup({
      name: new FormControl('Parvez', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city : new FormControl(),
        postalCode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
      })
    });

    toggle(){
      this.cone = !this.cone;
      this.ctwo = !this.ctwo;
    }

    onClick(value){
      console.log("Button Clicked:::", value);
    }

    onChange(value){
      this.childEvent.emit(value);
    }

    onSubmit(value: any){
      console.log("Value", value)
    }

    onSubmitForm(){
      console.log("Value", this.userModelForm.value)
    }

    
}