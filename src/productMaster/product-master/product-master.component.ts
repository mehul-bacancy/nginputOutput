import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { totalmem } from 'os';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  products: IDetails[]=[];
  qty: number;
  stock: number;
  isDelete: boolean=true;
  
  constructor() { }

  ngOnInit() {
  }
  getFromProdctDetails(products: IDetails[]){
    this.products=products;
  }
  getFromStock(qty: number, product){
    this.qty=qty;
    product.stock =this.qty;
    console.log(this.stock);
  }
  getSumOfStock(): number{
    let total = this.products.reduce((total,products)=>{ 
      return total +=products.stock},0);
      return total;
  }
  getSumOfPrice(): number{
    let price = this.products.reduce((price,products)=>{
      return price += products.price;
    },0);
    return price;
  }
  getSumOfTotalPrice(): number{
    let totalPrice = this.products.reduce((totalPrice,products)=>{
      return totalPrice += (products.stock * products.price);
    },0);
    return totalPrice;
  }
}
