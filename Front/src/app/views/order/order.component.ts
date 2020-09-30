import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  loaded = false;
  user = {
    id:2
  }
  orders = []

 
  constructor(
    private conexionService:ConexionService
  ) { }

  ngOnInit() {
    this.conexionService.getAllOrders(this.user.id) 
	    .pipe(first())
        .subscribe(
            data => {
                if(data.success == 1){
                	this.loaded = true;
                  this.orders = data.info.orders;
                }else{
                  alert(data.info)
              }
          },
          error => {
              alert("Error de conexion, no se ha podido conectar con el servidor")
          });
  }

}
