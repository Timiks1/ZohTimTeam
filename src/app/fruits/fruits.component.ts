import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface HoroscopeData {
  horoscope: string;
}

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  public result: string | undefined;

  constructor(private http: HttpClient) {}

  onDateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const dateParts = input.value.split('-');
    const year = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1; // JS months are zero-based
    const day = Number(dateParts[2]);

    const url = `http://localhost:3000/api/fruits/${year}-${month+1}-${day}`;
    this.http.get<HoroscopeData>(url).subscribe(
      (data) => {
        this.result = data.horoscope;
        console.log('got');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
