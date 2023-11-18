// Import necessary Angular modules and dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the authGuard from the custom guard file
import { authGuard } from "./guards/auth.guard";

// Define the routes for the application
const routes: Routes = [
  {
    path: "auth/login",
    // Lazy-load the LoginComponent when the route is activated
    loadComponent: () => import('./pages/auth/login/login.component').then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    // Lazy-load the RegisterComponent when the route is activated
    loadComponent: () => import('./pages/auth/register/register.component').then(v => v.RegisterComponent)
  },
  {
    path: "categories",
    // Lazy-load the CategoryModule when the route is activated and apply the authGuard
    loadChildren: () => import("./pages/category/category.module").then(v => v.CategoryModule),
    canActivate: [authGuard]
  },
  {
    path: "products",
    // Lazy-load the ProductsModule when the route is activated
    loadChildren: () => import("./pages/products/products.module").then(v => v.ProductsModule)
  }
];

// Angular module for configuring the application routes
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import the configured routes
  exports: [RouterModule] // Export the configured routes for use in other modules
})
export class AppRoutingModule { }
