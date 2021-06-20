import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  private url: string = environment.apiurl;
  public result: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  searchEmployee(employeeName: string): void {
    var name = employeeName;
    if(!name) {
      return;
    } else {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      const params = new HttpParams().set(
        'name', name
      );
      this.http.get(
        `${this.url}`,
        { headers, params },
      ).pipe(
        map((data) => {
          this.result = data;
          console.log(data);
        },
        catchError(error => {
          return throwError('Search Error!');
        }))
      );
    }
  }
}
