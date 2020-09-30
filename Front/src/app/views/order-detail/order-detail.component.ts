import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AlertComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  id_order : string;
  orderdata : Array<any>;
  loaded = false;
  apiUrl = environment.apiUrl;
  
  constructor(private route: ActivatedRoute
    , private conexionService: ConexionService) { }

  ngOnInit() {
    this.id_order = this.route.snapshot.paramMap.get("order");
    this.conexionService.getOrderDetails(2,this.id_order) 
	    .pipe(first())
	        .subscribe(
	            data => {
	                if(data.success == 1){
                    this.orderdata = data.info	  
                    this.loaded = true                  
	                }else{
	                    alert(data.info)
	                }
	            },
	            error => {
	                alert("Error de conexion, no se ha podido conectar con el servidor")
	            });
  }

  createRange(num){
    let range = [];
    for(let i = 0; i<num; i++){
      range.push(i);
    }
    return range;
  }
}


