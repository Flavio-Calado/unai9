import {Injectable} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService{
private serviceUrl: String = 'http://localhost:3000/api';

constructor(private http: Http){}


    getAgenda(data: any){
         return this.http
        .post('http://localhost:3000/api/agenda/getbydate',data)
        .map((res:Response)=> res.json());
    }

    getAgendas(){
        return this.http
        .get('http://localhost:3000/api/agenda')
        .map((res:Response)=> res.json());
    }
}
