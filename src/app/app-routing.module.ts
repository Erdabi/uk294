import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth/login",
    loadComponent: () => import('./pages/auth/login/login.component').then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () => import('./pages/auth/register/register.component').then(v => v.RegisterComponent)
  },
  {
    path: "categories",
    loadChildren: () => import("./pages/category/category.module").then(v => v.CategoryModule)
  },
  {
    path: "products",
    loadChildren: () => import("./pages/products/products.module").then(v => v.ProductsModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
