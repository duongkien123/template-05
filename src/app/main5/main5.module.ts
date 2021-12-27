import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Main6Component } from './main6/main6.component';
import { Routes, RouterModule } from '@angular/router';
import { Main5Component } from './main5.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: Main5Component, children: [
    { path: '', component: ProductComponent},
    { path: 'product', component: ProductComponent},
    { path: 'main6', component: Main6Component}
  ]}
]

@NgModule({
  declarations: [
    Main5Component,
    Main6Component,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Main5Module { }
