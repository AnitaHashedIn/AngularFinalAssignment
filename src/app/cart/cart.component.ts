import { Component, OnInit } from '@angular/core';
import { ItemsService,ListItem } from '../items.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemservice:ItemsService;
  CartItemsList?:ListItem[];
  constructor(CartItems:ItemsService) {
    this.cartItemservice = CartItems;
  }

  ngOnInit(): void {
    this.CartItemsList = this.cartItemservice.getCartList();
  }
  MoveToWishlist(item: ListItem): void {
    this.cartItemservice.OnWishlist(item);
  }
  ClickonCartDelete(item: ListItem): void {
    this.cartItemservice.OnDeleteItemcart(item);
  }

}
