import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input()
  data = Array<any>();
  constructor() { }

  ngOnInit() {
  }
  
  createRange(num){
    let range = [];
    for(let i = 0; i<num; i++){
      range.push(i);
    }
    return range;
  }

}
