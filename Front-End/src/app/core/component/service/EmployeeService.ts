import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Employee } from "../../models/Employee";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseService } from "./base.service";

@Injectable()
export class EmployeeService{
    
    private url = environment.API_ENDPOINT;
    constructor(private service: BaseService){}

    get() : Observable<Employee[]>
    {
      return this.service.get(this.url+"Employee")
        .pipe(map(r=>{
            return r;
        }));
    }
}