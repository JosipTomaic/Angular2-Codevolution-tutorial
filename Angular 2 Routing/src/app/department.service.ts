import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DepartmentService{
    
    constructor(private _http: Http){}

    getDepartments(){
        return this._http.get("apidata/departmentsdata.json")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server error.");
    }
}