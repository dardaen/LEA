import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  displayedColumns$: string[] = ['Code', 'Name', 'Price', 'Description'];
  items$: object;
  pageTitle: string = "Inventory Page";

  constructor(private data: InventoryService) { }

  ngOnInit() {
    this.data.getItems().subscribe(
      data => this.items$ = data
    )

  }

}
