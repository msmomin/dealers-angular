import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiURL } from 'src/environments/environment';
import { Options } from '../interfaces/options';

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  public options: any;

  constructor(private http: Http) {}

  public getOptions() {
    return this.http.get(apiURL + '/getDropdownOptions');
      //  .subscribe(res => {
      //    this.options = JSON.parse(res['_body']);
      //  });
  }

  public getData(url: any): any {
    return this.http.get(apiURL + '/' + url);
  }

}
