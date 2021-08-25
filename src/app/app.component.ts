import { Component } from '@angular/core';
import { TypeCalc } from './models/enums/typeCalculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator0821';


  public dataCalcList: {typeName: TypeCalc; icon: string; isOn: boolean; routerLink: string}[] =
  [
    {typeName: TypeCalc.classic,icon: 'bug',  isOn: true, routerLink: 'classic'},
    {typeName: TypeCalc.scientific,icon: 'construct',  isOn: true, routerLink: 'scientific'},
    {typeName: TypeCalc.programmer,icon: 'save',  isOn: false, routerLink: 'programmer'}
  ];


}
