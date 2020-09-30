import { Component,  OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { first } from 'rxjs/operators';

import * as moment from 'moment';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';
//  import "owl.carousel";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems ;
  returnUrl: string;
  red = Array<any>();
  message: string;
  messages: string[] = [];
  apiip = environment.apiUrl;
  usuario = {};
  href:string = '';
  mostrar = false;
 	constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

  

  ngOnInit() {
    this.navItems = navItems
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
