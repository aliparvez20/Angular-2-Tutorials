import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials/tutorials.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  public childData:string;
}
