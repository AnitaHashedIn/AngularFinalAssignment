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
  IsWishlistEmpty:boolean=true;
  constructor(ItemsService:ItemsService) {
    this.ItemService = ItemsService;
   }

  ngOnInit(): void {
    this.WishlistData = this.ItemService.getWishlist();
    if(this.WishlistData.length>0)
      this.IsWishlistEmpty = false;
  }
 ngOnChanges(){

  }
  MoveToCart(item: ListItem): void {
    this.ItemService.OnAddtocart(item);
    window.alert("Item Title: "+ item.title+" successfully moved into cart");
    if(this.WishlistData.length === 0)
      this.IsWishlistEmpty = true;
  }
  ClickonWishListItemDelete(item: ListItem): void {
    this.ItemService.OnDeleteItemWishlist(item);
    window.alert("Item Title: "+ item.title+" successfully deleted from your wishlist");
    if(this.WishlistData.length === 0)
      this.IsWishlistEmpty = true;
  }
}
