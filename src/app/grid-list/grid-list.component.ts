import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  cardExpanded = false;

  gridItems = [
    {
      id: "1",
      name: "BLOCK 1",
      content: "IS ACTIVE!",
      color: "pink",
      display: true
    },
    {
      id: "2",
      name: "BLOCK 2",
      content: "IS ACTIVE!",
      color: "coral",
      display: true
    },
    {
      id: "3",
      name: "BLOCK 3",
      content: "IS ACTIVE!",
      color: "darkcyan",
      display: true
    },
    {
      id: "4",
      name: "BLOCK 4",
      content: "IS ACTIVE!",
      color: "lightblue",
      display: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleItem(item: any) {
    this.cardExpanded = !this.cardExpanded;
    if(this.cardExpanded) {
      this.gridItems.forEach(gridItem => {
        if (gridItem.id !== item.id) {
          gridItem.display = false;
        }
      });
    } else {
      this.gridItems.forEach(gridItem => {
        gridItem.display = true;
      });
    }
    console.log(this.gridItems);
  }

}
