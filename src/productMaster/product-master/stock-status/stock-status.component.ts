import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {
  @Output() stockToParent = new EventEmitter<number>();
  @Input() product: IDetails;
  qty: number;
  constructor() { }

  ngOnInit() {
  }
  StockUpdateToParent(qty: number){
    if(isNumber(this.product.stock)){
    this.stockToParent.emit(qty);
    console.log(qty);}
  }
  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;  (keypress)="numberOnly($event)"
  // }
}
