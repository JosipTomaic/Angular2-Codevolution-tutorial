import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class EmployeeService{

    constructor(private _http: Http){}

    getEmployees(){
        return this._http.get("apidata/employeedata.json")
            .map((response: Response) => response.json())
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}

// 26. video - Using a Service
// getEmployees(){
//         return [
//             {"id": 1, "name": 'Jole', "gender": 'male'},
//             {"id": 2, "name": 'Pero', "gender": 'male'},
//             {"id": 3, "name": 'Đuro', "gender": 'male'},
//             {"id": 4, "name": 'Stevo', "gender": 'male'},
//         ]
//     }