import { Options } from './interfaces/options';

import {
  DealersService
} from './services/dealers.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Socket-Angular';
  private options: Options[];
  public currentOption: any;
  public tableData: any;

  constructor(private dealerService: DealersService) {
    // getting options
    this.dealerService.getOptions().subscribe(response => {
      this.options = response;
    });
  }

  public OptionChange($event: Event) {
    for (const option of this.options) {
      if (option.url !== this.currentOption) {
        continue;
      }
      this.dealerService.getData(option.url).subscribe(res => {
        this.tableData = res;
      });
      break;
    }
  }
}
