import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parse } from 'date-fns';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  public result : string | undefined;
  constructor(private http: HttpClient) {}

  onDateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const dateString = input.value;
    const date = parse(dateString, 'yyyy-MM-dd', new Date());
    console.log(date);
    const apiUrl = `http://localhost:3000/fruits?date=${date}`;
    this.http.get(apiUrl).subscribe((data) => console.log(data));
    // this.result = "tttttt";
  }
}
