import { Component } from '@angular/core';

@Component({
  selector: 'pm-products-detail', // Component selector
  templateUrl: './products-detail.component.html', // Path to the component's HTML file
  styleUrls: ['./products-detail.component.scss'] // Path to the styling rules of the component
})
export class ProductsDetailComponent {
  // Array for the list of products
  products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 14 },
    // Add more products here...
  ];

  // Object for a new product
  newProduct: any = {};

  // Object for an edited product
  editingProduct: any = null;

  // Method to add a new product
  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = {}; // Clear the form
  }

  // Method to edit an existing product
  editProduct(index: number) {
    this.editingProduct = { ...this.products[index] }; // Copy the product for editing
    this.products.splice(index, 1); // Remove the product from the list
  }

  // Method to cancel editing
  cancelEdit() {
    this.products.push(this.editingProduct); // Add the edited product back to the list
    this.editingProduct = null; // End the editing mode
  }

  // Method to save the editing changes
  saveEdit() {
    this.products.push(this.editingProduct); // Add the edited product back to the list
    this.editingProduct = null; // End the editing mode
  }

  // Method to delete a product
  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
