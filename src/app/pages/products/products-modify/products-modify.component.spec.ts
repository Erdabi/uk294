import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModifyComponent } from './products-modify.component';

describe('ProductsModifyComponent', () => {
  let component: ProductsModifyComponent;
  let fixture: ComponentFixture<ProductsModifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModifyComponent]
    });
    fixture = TestBed.createComponent(ProductsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
