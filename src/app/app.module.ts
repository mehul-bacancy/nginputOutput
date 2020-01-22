import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductMasterModule } from '../productMaster/product-master/product-master.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
  path: 'home',
  component: HomeComponent,
  },
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: './product-master/product-master.module#ProductMasterModule'
  },
  { path: '**', component: HomeComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ProductMasterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
