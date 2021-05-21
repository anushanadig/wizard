import { Component, ViewEncapsulation } from '@angular/core';
import * as log from 'loglevel';
import moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {
    log.warn("module-tastic app");
    log.info("infoo app");
  }
  currentTimeFRLocale: string;

  ngOnInit(): void {
    moment.locale('fr');
    this.currentTimeFRLocale = moment().format('LLL');
    let docStyle = getComputedStyle(document.documentElement);
    let myVarVal = docStyle.getPropertyValue('my-variable-name');
    console.log('color', myVarVal)

//set variable
    docStyle.setProperty('my-variable-name', '#fff');
  }

  title = 'test-app';
}
