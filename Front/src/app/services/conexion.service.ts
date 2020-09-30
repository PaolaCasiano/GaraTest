import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service'
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class ConexionService {
    apiip = environment.apiUrl;

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
      
    }

    getAllOrders(idUser){
        let apiUrl = this.apiip + '/orders/getOrders';
        return this.http.post<any>(apiUrl, {iduser:idUser})
            .pipe(map(data => {
                return data;
            }));
    }


    getOrderDetails(cid,order){
        return this.response(this.apiip + '/orders/getorderdetail', {idc: cid, id: order})
    }

    response(apiUrl, info){
        return this.http.post<any>(apiUrl, info)
        .pipe(map(data => {
            return data;
        }));
    }

}