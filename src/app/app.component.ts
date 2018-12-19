import { Component } from '@angular/core';
import { TestLibService } from 'test-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'huge-app';

  constructor(private service: TestLibService) {
    this.title = this.service.getTest();
  }
}
