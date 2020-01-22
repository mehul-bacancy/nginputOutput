import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit,OnChanges {
  @Input() product: IDetails[];
  @Input() isDelete:boolean=false;
  isChacked:boolean = false;
  deleteProduct: IDetails[];
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(){
    // console.log(this.product)
  }
  checked(event){
    console.log()
    if(event.target.checked){
      console.log(this.product);
     }else{
      console.log("u")
    }
    
  }
  delete(){

  }
}
