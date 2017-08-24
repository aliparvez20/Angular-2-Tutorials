import { Component, Directive, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent {
    employees = [
      {"id": 1, "name": "Parvez", "gender":"Male"},
      {"id": 2, "name": "Manjurul", "gender":"Male"},
      {"id": 3, "name": "Venkenna", "gender":"Male"},
      {"id": 4, "name": "Rastogi", "gender":"Male"},
      {"id": 5, "name": "Tausif", "gender":"Male"}
    ]

    
}