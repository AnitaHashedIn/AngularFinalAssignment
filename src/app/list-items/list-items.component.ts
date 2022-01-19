import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ItemsService ,ListItem} from '../items.service';
export const SelectedItem =null;
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})

export class ListItemsComponent implements OnInit {
  Itemlist:any;
  Isselected:boolean = false;
  ItemListService:ItemsService;
  SelectedItem?:ListItem;
  AddtoCartList:ListItem[]=[];
   IsAddtoCartItem:boolean=false;
  WishList:ListItem[]=[];
  // WishListItem?:ListItem;
  constructor(ItemService:ItemsService,private dialog: MatDialog) {
    this.ItemListService = ItemService;
   }

  ngOnInit(): void {
    this.Itemlist = this.ItemListService.getCourses();
    console.log(this.Itemlist);
    this.Isselected = false;
    this.IsAddtoCartItem = false;
  }

onSelect(item: ListItem): void {
  this.SelectedItem = item;
  this.Isselected = true;
  // window.location.href= "http://localhost:4200/details"
}
ClickonAddtocart(item: ListItem): void {
  this.IsAddtoCartItem = true;
  this.ItemListService.OnAddtocart(item);
  window.alert("Item Title: "+ item.title+" successfully moved into cart");
  // if(this.Isselected)
  // {
  //   window.location.href = "http://localhost:4200/list-items";
  //   this.ItemListService.OnAddtocart(item);
  // }

}
ClickonWishlist(item: ListItem): void {
  this.ItemListService.OnWishlist(item);
  window.alert("Item Title: "+ item.title+" successfully moved into Wishlist");
  // if(this.Isselected)
  // {
  //   window.location.href = "http://localhost:4200/list-items";
  //   this.ItemListService.OnWishlist(item);
  // }

}


}

