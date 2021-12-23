import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from "@angular/router";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(alert, {
      data: {
        animal: 'panda',
      },
    });
  }

  loginProcess(){
    if(this.username=="admin" && this.password=="assesment2021"){
      console.log("BERHASILL!!");
      this.router.navigate(['/employee/list']);
    }else{
      console.log("Gagal :(");
      this.openDialog();
      // this.router.navigate(['']);
    }
  }
}
export class alert {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
