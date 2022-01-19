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
  TotalPrice:number =0;
  SavedMoney:number =0;
  constructor(CartItems:ItemsService) {
    this.cartItemservice = CartItems;
  }

  ngOnInit(): void {
    this.CartItemsList = this.cartItemservice.getCartList();
    for(let i=0;i<this.CartItemsList.length;i++)
    {
      if(Number(this.CartItemsList[i].discounted_price) !== 0)
      {
        this.TotalPrice += Number(this.CartItemsList[i].discounted_price);
        this.SavedMoney +=(Number(this.CartItemsList[i].actual_price)-Number(this.CartItemsList[i].discounted_price));
      }
      else
      {
        this.TotalPrice += Number(this.CartItemsList[i].actual_price);
      }

    }
  }
  MoveToWishlist(item: ListItem): void {
    this.cartItemservice.OnWishlist(item);
    if(this.TotalPrice >=Number(item.actual_price)  && (item.discounted_price === null || Number(item.discounted_price) === 0 ))
      {
        this.TotalPrice -= Number(item.actual_price);
      }
    else if (this.TotalPrice >= Number(item.discounted_price))
    {
      this.TotalPrice -= Number(item.discounted_price)
    }

    window.alert("Item Title: "+ item.title+" successfully moved into Wishlist");
  }
  ClickonCartDelete(item: ListItem): void {
    this.cartItemservice.OnDeleteItemcart(item);
    if(this.TotalPrice >=Number(item.actual_price)  && (item.discounted_price === null || Number(item.discounted_price) === 0 ))
      {
        this.TotalPrice -= Number(item.actual_price);
      }
    else if (this.TotalPrice >= Number(item.discounted_price))
    {
      this.TotalPrice -= Number(item.discounted_price)
    }
    window.alert("Item Title: "+ item.title+" successfully deleted from your cart");
  }

  ClickonCheckOut()
  {
    this.cartItemservice.OnCheckOut();
    this.SavedMoney =0;
    this.TotalPrice =0;
    window.alert("You have Successfully completed your order");
  }

}
