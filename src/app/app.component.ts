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
export class AppComponent implements OnInit {
  title = 'Socket-Angular';
  private options: any;
  public currentOption: any;
  public tableData: any;

  constructor(private dealerService: DealersService) {
    // getting options
    this.dealerService.getOptions().subscribe(res => {
      this.options = JSON.parse(res['_body']);
    });
  }

  public ngOnInit() {

  }

  public OptionChange($event: Event) {
    for (const option of this.options) {
      if (option.url !== this.currentOption) {
        continue;
      }
      this.dealerService.getData(option.url).subscribe(res => {
        this.tableData = JSON.parse(res['_body']);
      });
      break;
    }
  }
}
