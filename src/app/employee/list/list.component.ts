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
  public employeeData : any;

  constructor(private api : RestService,private formbuilber: FormBuilder) { }

  public dataa = [
    {
      "username": "user1",
      "firstName": "delectus aut autem",
      "lastName": "dummy",
      "email": "user1@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user2",
      "firstName": "quis ut nam facilis et officia qui",
      "lastName": "dummy",
      "email": "user2@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user3",
      "firstName": "fugiat veniam minus",
      "lastName": "dummy",
      "email": "user3@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user4",
      "firstName": "et porro tempora",
      "lastName": "dummy",
      "email": "user4@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user5",
      "firstName": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "lastName": "dummy",
      "email": "user5@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user6",
      "firstName": "qui ullam ratione quibusdam voluptatem quia omnis",
      "lastName": "dummy",
      "email": "user6@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user7",
      "firstName": "illo expedita consequatur quia in",
      "lastName": "dummy",
      "email": "user7@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user8",
      "firstName": "quo adipisci enim quam ut ab",
      "lastName": "dummy",
      "email": "user8@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user9",
      "firstName": "molestiae perspiciatis ipsa",
      "lastName": "dummy",
      "email": "user9@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user10",
      "firstName": "illo est ratione doloremque quia maiores aut",
      "lastName": "dummy",
      "email": "user10@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user11",
      "firstName": "vero rerum temporibus dolor",
      "lastName": "dummy",
      "email": "user11@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user12",
      "firstName": "ipsa repellendus fugit nisi",
      "lastName": "dummy",
      "email": "user12@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user13",
      "firstName": "et doloremque nulla",
      "lastName": "dummy",
      "email": "user13@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user14",
      "firstName": "repellendus sunt dolores architecto voluptatum",
      "lastName": "dummy",
      "email": "user14@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user15",
      "firstName": "ab voluptatum amet voluptas",
      "lastName": "dummy",
      "email": "user15@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user16",
      "firstName": "accusamus eos facilis sint et aut voluptatem",
      "lastName": "dummy",
      "email": "user16@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user17",
      "firstName": "quo laboriosam deleniti aut qui",
      "lastName": "dummy",
      "email": "user17@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user18",
      "firstName": "dolorum est consequatur ea mollitia in culpa",
      "lastName": "dummy",
      "email": "user18@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user19",
      "firstName": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "lastName": "dummy",
      "email": "user19@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user20",
      "firstName": "ullam nobis libero sapiente ad optio sint",
      "lastName": "dummy",
      "email": "user20@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user21",
      "firstName": "suscipit repellat esse quibusdam voluptatem incidunt",
      "lastName": "dummy",
      "email": "user21@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user22",
      "firstName": "distinctio vitae autem nihil ut molestias quo",
      "lastName": "dummy",
      "email": "user22@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user23",
      "firstName": "et itaque necessitatibus maxime molestiae qui quas velit",
      "lastName": "dummy",
      "email": "user23@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user24",
      "firstName": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "lastName": "dummy",
      "email": "user24@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user25",
      "firstName": "voluptas quo tenetur perspiciatis explicabo natus",
      "lastName": "dummy",
      "email": "user25@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user26",
      "firstName": "aliquam aut quasi",
      "lastName": "dummy",
      "email": "user26@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user27",
      "firstName": "veritatis pariatur delectus",
      "lastName": "dummy",
      "email": "user27@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user28",
      "firstName": "nesciunt totam sit blanditiis sit",
      "lastName": "dummy",
      "email": "user28@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user29",
      "firstName": "laborum aut in quam",
      "lastName": "dummy",
      "email": "user29@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user30",
      "firstName": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
      "lastName": "dummy",
      "email": "user30@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user31",
      "firstName": "repudiandae totam in est sint facere fuga",
      "lastName": "dummy",
      "email": "user31@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user32",
      "firstName": "earum doloribus ea doloremque quis",
      "lastName": "dummy",
      "email": "user32@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user33",
      "firstName": "sint sit aut vero",
      "lastName": "dummy",
      "email": "user33@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user34",
      "firstName": "porro aut necessitatibus eaque distinctio",
      "lastName": "dummy",
      "email": "user34@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user35",
      "firstName": "repellendus veritatis molestias dicta incidunt",
      "lastName": "dummy",
      "email": "user35@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user36",
      "firstName": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
      "lastName": "dummy",
      "email": "user36@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user37",
      "firstName": "sunt cum tempora",
      "lastName": "dummy",
      "email": "user37@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user38",
      "firstName": "totam quia non",
      "lastName": "dummy",
      "email": "user38@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user39",
      "firstName": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
      "lastName": "dummy",
      "email": "user39@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user40",
      "firstName": "totam atque quo nesciunt",
      "lastName": "dummy",
      "email": "user40@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user41",
      "firstName": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      "lastName": "dummy",
      "email": "user41@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user42",
      "firstName": "rerum perferendis error quia ut eveniet",
      "lastName": "dummy",
      "email": "user42@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user43",
      "firstName": "tempore ut sint quis recusandae",
      "lastName": "dummy",
      "email": "user43@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user44",
      "firstName": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
      "lastName": "dummy",
      "email": "user44@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user45",
      "firstName": "velit soluta adipisci molestias reiciendis harum",
      "lastName": "dummy",
      "email": "user45@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user46",
      "firstName": "vel voluptatem repellat nihil placeat corporis",
      "lastName": "dummy",
      "email": "user46@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user47",
      "firstName": "nam qui rerum fugiat accusamus",
      "lastName": "dummy",
      "email": "user47@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user48",
      "firstName": "sit reprehenderit omnis quia",
      "lastName": "dummy",
      "email": "user48@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user49",
      "firstName": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
      "lastName": "dummy",
      "email": "user49@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user50",
      "firstName": "cupiditate necessitatibus ullam aut quis dolor voluptate",
      "lastName": "dummy",
      "email": "user50@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user51",
      "firstName": "distinctio exercitationem ab doloribus",
      "lastName": "dummy",
      "email": "user51@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user52",
      "firstName": "nesciunt dolorum quis recusandae ad pariatur ratione",
      "lastName": "dummy",
      "email": "user52@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user53",
      "firstName": "qui labore est occaecati recusandae aliquid quam",
      "lastName": "dummy",
      "email": "user53@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user54",
      "firstName": "quis et est ut voluptate quam dolor",
      "lastName": "dummy",
      "email": "user54@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user55",
      "firstName": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
      "lastName": "dummy",
      "email": "user55@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user56",
      "firstName": "deleniti ea temporibus enim",
      "lastName": "dummy",
      "email": "user56@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user57",
      "firstName": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
      "lastName": "dummy",
      "email": "user57@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user58",
      "firstName": "est dicta totam qui explicabo doloribus qui dignissimos",
      "lastName": "dummy",
      "email": "user58@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user59",
      "firstName": "perspiciatis velit id laborum placeat iusto et aliquam odio",
      "lastName": "dummy",
      "email": "user59@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user60",
      "firstName": "et sequi qui architecto ut adipisci",
      "lastName": "dummy",
      "email": "user60@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user61",
      "firstName": "odit optio omnis qui sunt",
      "lastName": "dummy",
      "email": "user61@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user62",
      "firstName": "et placeat et tempore aspernatur sint numquam",
      "lastName": "dummy",
      "email": "user62@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user63",
      "firstName": "doloremque aut dolores quidem fuga qui nulla",
      "lastName": "dummy",
      "email": "user63@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user64",
      "firstName": "voluptas consequatur qui ut quia magnam nemo esse",
      "lastName": "dummy",
      "email": "user64@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user65",
      "firstName": "fugiat pariatur ratione ut asperiores necessitatibus magni",
      "lastName": "dummy",
      "email": "user65@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user66",
      "firstName": "rerum eum molestias autem voluptatum sit optio",
      "lastName": "dummy",
      "email": "user66@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user67",
      "firstName": "quia voluptatibus voluptatem quos similique maiores repellat",
      "lastName": "dummy",
      "email": "user67@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user68",
      "firstName": "aut id perspiciatis voluptatem iusto",
      "lastName": "dummy",
      "email": "user68@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user69",
      "firstName": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
      "lastName": "dummy",
      "email": "user69@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user70",
      "firstName": "ut sequi accusantium et mollitia delectus sunt",
      "lastName": "dummy",
      "email": "user70@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user71",
      "firstName": "aut velit saepe ullam",
      "lastName": "dummy",
      "email": "user71@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user72",
      "firstName": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
      "lastName": "dummy",
      "email": "user72@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user73",
      "firstName": "sint amet quia totam corporis qui exercitationem commodi",
      "lastName": "dummy",
      "email": "user73@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user74",
      "firstName": "expedita tempore nobis eveniet laborum maiores",
      "lastName": "dummy",
      "email": "user74@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user75",
      "firstName": "occaecati adipisci est possimus totam",
      "lastName": "dummy",
      "email": "user75@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user76",
      "firstName": "sequi dolorem sed",
      "lastName": "dummy",
      "email": "user76@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user77",
      "firstName": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
      "lastName": "dummy",
      "email": "user77@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user78",
      "firstName": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
      "lastName": "dummy",
      "email": "user78@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user79",
      "firstName": "eum ipsa maxime ut",
      "lastName": "dummy",
      "email": "user79@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user80",
      "firstName": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      "lastName": "dummy",
      "email": "user80@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user81",
      "firstName": "suscipit qui totam",
      "lastName": "dummy",
      "email": "user81@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user82",
      "firstName": "voluptates eum voluptas et dicta",
      "lastName": "dummy",
      "email": "user82@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user83",
      "firstName": "quidem at rerum quis ex aut sit quam",
      "lastName": "dummy",
      "email": "user83@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user84",
      "firstName": "sunt veritatis ut voluptate",
      "lastName": "dummy",
      "email": "user84@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user85",
      "firstName": "et quia ad iste a",
      "lastName": "dummy",
      "email": "user85@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user86",
      "firstName": "incidunt ut saepe autem",
      "lastName": "dummy",
      "email": "user86@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user87",
      "firstName": "laudantium quae eligendi consequatur quia et vero autem",
      "lastName": "dummy",
      "email": "user87@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user88",
      "firstName": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
      "lastName": "dummy",
      "email": "user88@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user89",
      "firstName": "sequi ut omnis et",
      "lastName": "dummy",
      "email": "user89@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user90",
      "firstName": "molestiae nisi accusantium tenetur dolorem et",
      "lastName": "dummy",
      "email": "user90@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user91",
      "firstName": "nulla quis consequatur saepe qui id expedita",
      "lastName": "dummy",
      "email": "user91@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user92",
      "firstName": "in omnis laboriosam",
      "lastName": "dummy",
      "email": "user92@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user93",
      "firstName": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
      "lastName": "dummy",
      "email": "user93@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user94",
      "firstName": "facilis modi saepe mollitia",
      "lastName": "dummy",
      "email": "user94@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user95",
      "firstName": "vel nihil et molestiae iusto assumenda nemo quo ut",
      "lastName": "dummy",
      "email": "user95@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user96",
      "firstName": "nobis suscipit ducimus enim asperiores voluptas",
      "lastName": "dummy",
      "email": "user96@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user97",
      "firstName": "dolorum laboriosam eos qui iure aliquam",
      "lastName": "dummy",
      "email": "user97@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user98",
      "firstName": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
      "lastName": "dummy",
      "email": "user98@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user99",
      "firstName": "neque voluptates ratione",
      "lastName": "dummy",
      "email": "user99@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
    },
    {
      "username": "user100",
      "firstName": "excepturi a et neque qui expedita vel voluptate",
      "lastName": "dummy",
      "email": "user100@gmail.com",
      "basicSalary": 8000000,
      "birthDate": "1997-01-01",
      "status": "Contract",
      "group": "Group C",
      "description": ""
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
      console.log(typeof(res));
      console.log(typeof(this.dataa));

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
