import { Component, OnInit } from '@angular/core';
import { Product } from './product'
import { ProductService } from './product.service'
import { NotificationsService } from 'angular2-notifications'
import { CartService } from '../cart/cart.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  //public area
  products: Product[];
  addedProduct: string;
  constructor(
    private productService: ProductService,
    private notificationsService: NotificationsService,
    private cartService:CartService,
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getProducts(params["seoUrl"]);
    });
    
  }
""
  getProducts(seoUrl:string) {
    this.productService.getProducts(seoUrl).subscribe(x => { this.products = x });
    
  }
  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationsService.success("Successfull", product.productName + " added to cart !");
  }
}
