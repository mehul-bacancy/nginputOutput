import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() products: IDetails[];
  addDetails: IDetails;
  isShow: boolean=false;
  title: string;
  price: number;
  stock: number;

  addDetailsForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    stock: new FormControl('',[Validators.required])
  })

  constructor() { }

  ngOnInit() {
    
  }

  addProduct(event) {
    let id = this.products.length + 1;
    this.title = this.addDetailsForm.controls['title'].value;
    this.price = this.addDetailsForm.controls['price'].value;
    this.stock = this.addDetailsForm.controls['stock'].value;

    this.addDetails={
      id: id,
      title: this.title,
      price: this.price,
      stock: this.stock
    }

    this.products.push(this.addDetails);
    this.addDetailsForm.reset();
  }
  toggle(){
    this.isShow = !this.isShow; 
  }

}
