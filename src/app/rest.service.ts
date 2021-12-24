import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/Employee", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:3000/Employee")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data : any, user: string){
    return this.http.put<any>("http://localhost:3000/Employee"+user, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(user: string){
    return this.http.delete<any>("http://localhost:3000/Employee"+user)
    .pipe(map((res:any)=>{
      return resizeBy;
    }))
  }
}
