import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductMasterComponent } from './product-master.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  {
  path: 'products',
  component: ProductMasterComponent,
  },
  { path: '',
  redirectTo: '/products',
  pathMatch: 'full'
  },
  {
    path: 'add-product',
  component: AddProductComponent,
  }
  ];

@NgModule({
  declarations: [
    ProductDetailsComponent,
    StockStatusComponent,
    ProductMasterComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    ProductMasterComponent
  ]
})
export class ProductMasterModule { }
