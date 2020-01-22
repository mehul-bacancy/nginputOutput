import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetailsArray: IDetails[]=[];
  @Output() outputToParent = new EventEmitter<IDetails[]>();
 
  constructor() { }

  ngOnInit() {
    this.productDetailsArray = [
      {id:1, title:"iPhone", price: 500, stock: 10},
      {id:2, title:"redmi", price: 100, stock: 10},
      {id:3, title:"samsung", price: 100, stock: 10},
      {id:4, title:"oppo", price: 200, stock: 10},
      {id:5, title:"vivo", price: 100, stock: 10}
    ]
    this.productDetailsToParent(this.productDetailsArray);
  }
  productDetailsToParent(products: IDetails[]){
    this.outputToParent.emit(products);
    console.log(products);
  }
  
}
