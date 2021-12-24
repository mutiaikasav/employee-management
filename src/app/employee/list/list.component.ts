import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  formValue !: FormGroup;
  public employeeData !: any;

  constructor(private api : RestService,private formbuilber: FormBuilder) { }

  public dataa = [
    {
      username:"user1",
      firstName: "delectus aut autem",
      lastName: "dummy",
      email:"user1@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user2",
      firstName: "quis ut nam facilis et officia qui",
      lastName: "dummy",
      email:"user2@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user3",
      firstName: "fugiat veniam minus",
      lastName: "dummy",
      email:"user3@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user4",
      firstName: "et porro tempora",
      lastName: "dummy",
      email:"user4@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user5",
      firstName: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      lastName: "dummy",
      email:"user5@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
          username:"user6",
      firstName: "qui ullam ratione quibusdam voluptatem quia omnis",
      lastName: "dummy",
      email:"user6@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user7",
      firstName: "illo expedita consequatur quia in",
      lastName: "dummy",
      email:"user7@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user8",
      firstName: "quo adipisci enim quam ut ab",
      lastName: "dummy",
      email:"user8@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username:"user9",
      firstName: "molestiae perspiciatis ipsa",
      lastName: "dummy",
      email:"user9@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    },
    {
      username: "user10",
      firstName: "illo est ratione doloremque quia maiores aut",
      lastName: "dummy",
      email: "user10@gmail.com",
      basicSalary: 8000000,
      birthDate: "1997-01-01",
      status: "Contract",
      group: "Group C",
      description: ""
    }
  ];

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.getAllEmployee();
    this.dtOptions = {
      pagingType : 'full_numbers',
      pageLength : 10,
      lengthMenu : [5, 10, 15],
      processing : true
    }
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
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData = res;
    })
  }
  
  deleteEmployee(row : any){
    this.api.deleteEmployee(row.username)
    .subscribe(res=>{
      alert("Employee Deleted");
      this.getAllEmployee();
    })
  }

  detail(row : any){
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['username'].setValue(row.username);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['basicSalary'].setValue("Rp "+row.basicSalary+",00");
    this.formValue.controls['birthDate'].setValue(row.birthDate);
    this.formValue.controls['status'].setValue(row.status);
    this.formValue.controls['group'].setValue(row.group);
  }
}
