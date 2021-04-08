import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolverService } from './services/product-resolver.service';
import { ProductListResolverService } from './services/product-list-resolver.service';
import { LoginComponent } from '../user/login.component';
import {ProductEditInfoComponent} from '../products/product-edit/product-edit-info.component';
import {ProductEditTagsComponent} from '../products/product-edit/product-edit-tags.component';

const ROUTES: Routes = [
  {
    path: 'products', 
    component: ProductListComponent,
    resolve: {productsList: ProductListResolverService}
  },
  {
    path: 'products/:id', 
    component: ProductDetailComponent,
    resolve: {productData: ProductResolverService}
  },
  {
    path: 'products/:id/edit', 
    component: ProductEditComponent,
    resolve: {productData: ProductResolverService},
    children: [
      {path: '', redirectTo: 'info', pathMatch: 'full'},
      {path: 'info', component: ProductEditInfoComponent},
      {path: 'tags', component: ProductEditTagsComponent}
    ]
  },
  {
    path: 'login', 
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
