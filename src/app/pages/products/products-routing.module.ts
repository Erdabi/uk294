// Import necessary Angular modules and dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModifyComponent } from './products-modify/products-modify.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';

// Define the routes for the Products feature module
const routes: Routes = [
  {
    path: 'list',
    component: ProductsListComponent // Route for listing products
  },
  {
    path: 'create',
    component: ProductsModifyComponent // Route for creating a new product
  },
  {
    path: 'edit/:id',
    component: ProductsModifyComponent // Route for editing an existing product
  },
  {
    path: ":id",
    component: ProductsDetailComponent // Route for viewing details of a product
  }
];

// Angular module for configuring the Products feature module routes
@NgModule({
  imports: [RouterModule.forChild(routes)], // Import the configured routes
  exports: [RouterModule] // Export the configured routes for use in other modules
})
export class ProductsRoutingModule { }
