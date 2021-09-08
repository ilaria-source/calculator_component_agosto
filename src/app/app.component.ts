import { Component } from '@angular/core';
import { TypeCalc } from './models/enums/typeCalculator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator0821';

  public dataCalcList: {typeName: TypeCalc; isOn: boolean; routerLink: string}[] =
  [
    {typeName: TypeCalc.classic, isOn: true, routerLink: 'classic'},
    {typeName: TypeCalc.scientific,  isOn: true, routerLink: 'scientific'},
    {typeName: TypeCalc.programmer,  isOn: true, routerLink: 'programmer'},
    {typeName: TypeCalc.programmer,  isOn: false, routerLink: 'tasto disabilitato'}
  ];

}
