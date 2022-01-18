import { Component, OnInit } from '@angular/core';
import { ItemsService,ListItem } from '../items.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  ItemService:ItemsService;
  WishlistData:ListItem[]=[];
  constructor(ItemsService:ItemsService) {
    this.ItemService = ItemsService;
   }

  ngOnInit(): void {
    this.WishlistData = this.ItemService.getWishlist();
  }
  MoveToCart(item: ListItem): void {
    this.ItemService.OnAddtocart(item);
  }
  ClickonWishListItemDelete(item: ListItem): void {
    this.ItemService.OnDeleteItemWishlist(item);
  }
}
