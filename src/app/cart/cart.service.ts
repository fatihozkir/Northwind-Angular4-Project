import { Injectable } from '@angular/core';
import { Product } from '../product/product'
import { CartItem } from './cart-item'
import { Cart_Item_List } from './cart-item-list'
@Injectable()
export class CartService {
  cartItems: CartItem[];

  constructor() { }

  addToCart(product: Product): void {
    var addedProduct = Cart_Item_List.find(x => x.product.productId == product.productId);
    if (addedProduct) {
      addedProduct.quantity++;
    }
    else {
      let newCartItem = new CartItem();
      newCartItem.product = product;
      newCartItem.quantity = 1;
      Cart_Item_List.push(newCartItem);

    }
  }

  list(): CartItem[] {
    return Cart_Item_List;
  }

  clear() {
    Cart_Item_List.splice(0, Cart_Item_List.length);
  }

  removeFromCart(product:Product) {
    var getProduct=Cart_Item_List.find(x=>x.product.productId==product.productId);
    var productIndex=Cart_Item_List.indexOf(getProduct);
    if(productIndex!=-1)
    {
      //In this scope we defined start on the list with productIndex and will delete 1 product.
      Cart_Item_List.splice(productIndex,1);
    }
    
  }
}
