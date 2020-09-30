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
        let apiUrl = this.apiip + '/order/getOrders/'+idUser;
        return this.http.post<any>(apiUrl, null)
            .pipe(map(data => {
                return data;
            }));
    }

    getChatMensajes(id_usuario, id_chat){
        let apiUrl = this.apiip + '/chat/getChatMessages';
        return this.http.post<any>(apiUrl, {'id_usuario': id_usuario, 'id_chat': id_chat})
            .pipe(map(data => {
                return data;
            }));
    }

    deleteChat( id_chat, tipo){
        let apiUrl = this.apiip + '/chat/deleteChat';
        return this.http.post<any>(apiUrl, {'id_chat': id_chat,'tipo':tipo})
            .pipe(map(data => {
                return data;
            }));
    }

    enviarPunteo( id_chat, punteo){
        let apiUrl = this.apiip + '/chat/rateChat';
        return this.http.post<any>(apiUrl, {'id_chat': id_chat,'punteo':punteo})
            .pipe(map(data => {
                return data;
            }));
    }

    terminarChat( id_chat){
        let apiUrl = this.apiip + '/chat/terminarChat';
        return this.http.post<any>(apiUrl, {'id_chat': id_chat})
            .pipe(map(data => {
                return data;
            }));
    }

    getTipoCliente(todos){
        let apiUrl = this.apiip + '/getTipoCliente';
        return this.http.post<any>(apiUrl, {'todos':todos})
            .pipe(map(data => {
                return data;
            }));
    }

    getProdcutosOrderCat(data){
        let apiUrl = this.apiip + '/product/getProductoByOrderTag';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    getProductosByCategoria(id_tag){
        let apiUrl = this.apiip + '/product/getProductoByTag';
        return this.http.post<any>(apiUrl, {'tag':id_tag})
            .pipe(map(data => {
                return data;
            }));
    }

    getProductoByid(id_producto){
        let apiUrl = this.apiip + '/product/getProductoByid';
        return this.http.post<any>(apiUrl, {'id':id_producto})
            .pipe(map(data => {
                return data;
            }));
    }

    getProductoByUser(id_usuario){
        let apiUrl = this.apiip + '/product/getProductoByUser';
        return this.http.post<any>(apiUrl, {'id_usuario':id_usuario})
            .pipe(map(data => {
                return data;
            }));
    }

    getProductoRate(id_producto){
        let apiUrl = this.apiip + '/product/getProductoRate';
        return this.http.post<any>(apiUrl, {'id':id_producto})
            .pipe(map(data => {
                return data;
            }));
    }

    createProduct(data){
        let apiUrl = this.apiip + '/product/createProduct';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    updateProduct(data){
        let apiUrl = this.apiip + '/product/updateProduct';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    publicarComentario(id_producto, id_usuario, titulo, comentario, punteo){
        let apiUrl = this.apiip + '/product/postComment';
        return this.http.post<any>(apiUrl, {
            'id_producto':id_producto
            , 'id_usuario': id_usuario
            , 'titulo': titulo
            , 'comentario': comentario
            , 'punteo': punteo
        })
            .pipe(map(data => {
                return data;
            }));
    }

    updateUser(data){
        data.id_user = this.authenticationService.currentUserValue.user.ID;
        let apiUrl = this.apiip + '/usuario/updateUser';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    createUser(data){
        data.id_user = this.authenticationService.currentUserValue.user.ID;
        let apiUrl = this.apiip + '/usuario/createUser';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    datosReporte(no_reporte, data){
        data.id_user = this.authenticationService.currentUserValue.user.ID;
        let apiUrl = this.apiip + '/reporte/get'+no_reporte;
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    updateUserStatus(data){
        data.id_user = this.authenticationService.currentUserValue.user.ID;
        let apiUrl = this.apiip + '/usuario/updateUserStatus';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    subirArchivoCarga(data){
        let apiUrl = this.apiip + '/api/updload';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    subirImagen(data){
        let apiUrl = this.apiip + '/api/updloadImage';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    subirLogo(data){
        let apiUrl = this.apiip + '/api/updloadlogo';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

    subirVideo(data){
        let apiUrl = this.apiip + '/api/updloadvideo';
        return this.http.post<any>(apiUrl, data)
            .pipe(map(data => {
                return data;
            }));
    }

}