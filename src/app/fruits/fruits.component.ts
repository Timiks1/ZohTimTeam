import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',

  template: `  <style>
  table {
      border-collapse: collapse;
      width: 100%;
  }
  th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
  }
  th {
      background-color: #f2f2f2;
  }
  tr:hover {
    background-color: red;
}
</style>

<input type="text" id="searchInput" (keyup)="filterTable($event)" placeholder="Поиск...">
<table>
    <thead>
        <tr>
            <th>№</th>
            <th>Фрукт</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let item of filteredItems">
            <td>{{item.num}}</td>
            <td>{{item.name}}</td>
        </tr>
    </tbody>
</table>`
})
export class FruitsComponent {
  items: Fruit[] = [
    { num: 1, name: 'Яблоко' },
    { num: 2, name: 'Банан' },
    { num: 3, name: 'Апельсин' },
    { num: 4, name: 'Груша' },
    { num: 5, name: 'Вишня' }
  ];

  filterText = '';
  filteredItems: Fruit[] = [];
  filterTable(event: Event) {
    this.filterText = (event.target as HTMLInputElement).value;
    this.filteredItems = this.items.filter(item => {
      return item.name.toUpperCase().includes(this.filterText.toUpperCase());
    });
  }
  

}
// <li *ngFor="let item of items">{{item}}</li>
class Fruit {
  public name : string;
  public num : Number;
  constructor(name : string, num : Number){
    this.name = name;
    this.num = num;
  }
}