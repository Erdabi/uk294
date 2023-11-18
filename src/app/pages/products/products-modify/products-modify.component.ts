import { Component } from '@angular/core';

@Component({
  selector: 'pm-products-modify',
  templateUrl: './products-modify.component.html',
  styleUrls: ['./products-modify.component.scss']
})
export class ProductsModifyComponent {
  products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 14 },
    // Weitere Produkte hier...
  ];

  newProduct: any = {};
  editingProduct: any = null;

  addProduct() {
    this.products.push(this.newProduct);
    this.newProduct = {}; // Leere das Formular
  }

  editProduct(index: number) {
    this.editingProduct = { ...this.products[index] }; // Kopiere das Produkt für die Bearbeitung
    this.products.splice(index, 1); // Entferne das Produkt aus der Liste
  }

  cancelEdit() {
    this.products.push(this.editingProduct); // Füge das bearbeitete Produkt zurück zur Liste hinzu
    this.editingProduct = null; // Beende den Bearbeitungsmodus
  }

  saveEdit() {
    this.products.push(this.editingProduct); // Füge das bearbeitete Produkt zurück zur Liste hinzu
    this.editingProduct = null; // Beende den Bearbeitungsmodus
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
