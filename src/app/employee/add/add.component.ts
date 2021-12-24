import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Select2OptionData } from 'ng-select2';
import { RestService } from 'src/app/rest.service';
import { EmployeeModel } from './add.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public exampleData: Array<Select2OptionData>;
  
  public formControl = new FormControl();
  public value: string;

  formValue !: FormGroup;
  employeeModel : EmployeeModel = new EmployeeModel();
  
  myDate = new Date();

  latest_date : string;

  constructor(private formbuilber: FormBuilder,
  private api : RestService,
  private datepipe : DatePipe) { }
  

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: [''],
      birthDate: [''],
      basicSalary: [''],
      status: [''],
      group: ['']
    })
    this.exampleData = [
      {
        id: 'groupA',
        text: 'group A'
      },
      {
        id: 'groupB',
        text: 'group B'
      },
      {
        id: 'groupC',
        text: 'group C'
      },
      {
        id: 'groupD',
        text: 'group D'
      },
      {
        id: 'groupE',
        text: 'group E'
      },
      {
        id: 'groupF',
        text: 'group F'
      },
      {
        id: 'groupG',
        text: 'group G'
      },
      {
        id: 'groupH',
        text: 'group H'
      },
      {
        id: 'groupI',
        text: 'group I'
      },
      {
        id: 'groupJ',
        text: 'group J'
      }
    ];
  }

  postEmployeeDetail(){
    let latest_date =this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    this.employeeModel.firstName = this.formValue.value.firstName;
    this.employeeModel.lastName = this.formValue.value.lastName;
    this.employeeModel.username = this.formValue.value.username;
    this.employeeModel.email = this.formValue.value.email;
    this.employeeModel.basicSalary = this.formValue.value.basicSalary;
    this.employeeModel.birthDate = this.formValue.value.birthDate;
    this.employeeModel.status = this.formValue.value.status;
    this.employeeModel.group = this.formValue.value.group;
    this.employeeModel.description = this.latest_date;
    
    this.api.postEmployee(this.employeeModel)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Succesfully");
      this.formValue.reset;
    },
    err=>{
      alert("Something went wrong");
    })
  }
}
