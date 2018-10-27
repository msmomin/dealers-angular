import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Options } from '../interfaces/options';
import { catchError, map } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  public options: any;

  constructor(private http: HttpClient) {}

  public getOptions() {
    return this.http.get<Options[]>(environment.apiURL + '/getDropdownOptions')
    .pipe(map(data => data), catchError(this.handleError));
  }

  public getData(url: any): any {
    return this.http.get<any>(environment.apiURL + '/' + url)
    .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
