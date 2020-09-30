import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { INavData } from '@coreui/angular';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    public api = environment.apiUrl;//'http://192.168.1.15:8000';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        console.log(username);

        let formData = new FormData();
        let apiUrl = this.api +'/users/authenticate';
        formData.append("username", username);
        formData.append("password", password);

       return this.http.post<any>(apiUrl, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                if(user.success == 1){
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));

            //return "err";
    }

    getUserMenu(){
        let apiUrl = this.api +'/users/navBar';
        let user = null;
        //return this.http.post<any>(apiUrl, { 'id': this.currentUserValue.user.ID })
        if(user == null){
            if(this.currentUserValue==null){
                user = '0';
            }else{
                user = this.currentUserValue.user.ID;
            }
        }
        return this.http.post<any>(apiUrl, { 'id': user })
            .pipe(map(value => {
                // store value details and jwt token in local storage to keep value logged in between page refreshes
                return value;
            }));
    }

    register(controls) {

        let data = {
            'username' : controls.username,
            'password' : controls.password,
            'passconf' : controls.passconf,
            'nombre' : controls.nombre,
            'apellidos' : controls.apellidos,
            'correo' : controls.correo,
            'genero' : controls.genero,
            'nacimiento' : controls.nacimiento,
            'telefono' : controls.telefono,
            'direccion' : controls.direccion,
        }
        let formData = new FormData();
        let apiUrl = this.api +'/users/register';

       return this.http.post<any>(apiUrl, data)
            .pipe(map(user => {
                return user;
            }));

            //return "err";
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }


    validarCuenta(codigo){
        let data = {
            'codigo' : codigo
        }
        let formData = new FormData();
        let apiUrl = this.api +'/users/validation';

       return this.http.post<any>(apiUrl, data)
            .pipe(map(user => {
                return user;
            }));
    }





}