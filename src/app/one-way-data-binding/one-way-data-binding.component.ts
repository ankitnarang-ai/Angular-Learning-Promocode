import { Component } from '@angular/core';

@Component({
  selector: 'one-way-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './one-way-data-binding.component.html',
  styleUrl: './one-way-data-binding.component.css'
})
export class OneWayDataBindingComponent {
  name = "Ankit"
  productDetail: any = {
    price: 800,
    name: "Iphone",
    description: "Iphone 14 pro",
  }
  ngOnInit() {
    // Initialize discount after the component is initialized
    this.productDetail.discount = this.getDiscount();
  }


  getDiscount(){
    return this.productDetail.price - this.productDetail.price * 8 / 100;
  }
}
