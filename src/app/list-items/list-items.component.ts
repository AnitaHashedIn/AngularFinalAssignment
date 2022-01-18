import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemsService ,ListItem} from '../items.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  Itemlist:any;
  Isselected:boolean = false;
  dataSource: any;
  ItemListService:ItemsService;
  SelectedItem?:ListItem;
 // @ViewChild(MatSort) sort: MatSort;
  AddtoCartList:ListItem[]=[];
  displayedColumns: string[] = ['Title', 'Author', 'Discounted_price', 'Actual_Price', 'Action'];
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
  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.Itemlist);
   // this.dataSource.sort = this.sort;

  }

onSelect(item: ListItem): void {
  this.SelectedItem = item;
  this.Isselected = true;
 // window.location.href= "http://localhost:4200/item-details"
}
ClickonAddtocart(item: ListItem): void {
  this.IsAddtoCartItem = true;
  this.ItemListService.OnAddtocart(item);
  // const dialogRef = this.dialog.open(ListItemsComponent, {
  //   width: '450px',
  //   height: '375px',
  //   data: {chemData:item}
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   if (result) {
  //     //this.openSnackBar(`Message From Dialog:  ${result}`, 'Close')
  //   }
  // });
}
ClickonWishlist(item: ListItem): void {
  this.ItemListService.OnWishlist(item);
}


}

