import { Component , OnInit} from '@angular/core';

interface ListItem{
  tags:string[];
  details:string;
  description:string;
  discounted_price:string;
  actual_price:string;
  author:string;
  title:string;
  id:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Final-Assignment';
}
