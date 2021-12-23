import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

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
    this.dtOptions = {
      pagingType : 'full numbers',
      pageLength : 5,
      lengthMenu : [5, 10, 15],
      processing : true
    }
  }

}
