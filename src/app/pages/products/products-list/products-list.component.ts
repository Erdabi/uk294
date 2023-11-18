import { Component } from '@angular/core';

@Component({
  selector: 'pm-products-list', // Component selector
  templateUrl: './products-list.component.html', // Path to the component's HTML file
  styleUrls: ['./products-list.component.scss'] // Path to the styling rules of the component
})
export class ProductsListComponent {
  // Array for the list of products
  products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 14 },
    // Add more products here...
  ];
}
