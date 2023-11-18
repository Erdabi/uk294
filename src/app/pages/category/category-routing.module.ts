// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components related to the category feature
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

// Import the authentication guard
import { authGuard } from "../../guards/auth.guard";

// Define the routes for the category feature
const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryModifyComponent,
    canActivate: [authGuard] // Use the authentication guard for this route
  },
  {
    path: 'edit/:id',
    component: CategoryModifyComponent
  },
  {
    path: ":id",
    component: CategoryDetailComponent
  }
];

// Define the Angular module for category routing
@NgModule({
  imports: [RouterModule.forChild(routes)], // Import the configured routes
  exports: [RouterModule] // Export the configured routes for use in other modules
})
export class CategoryRoutingModule { }
