import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.css']
})
export class ProgrammerComponent implements OnInit {

  constructor(private http:HttpClient){}

  fromHexa(num: string)
  {
    //converte in decimale
    //richiama le funzioni che partono da decimale
  }
  fromDec(num: number)
  {
    //richiama le funzioni da decimale es  decToHexa(num)
  }

  fromOct(num: number)
  {
    //converte in decimale
    //richiama le funzioni che partono da decimale
  }

  fromBin(num: string)
  {
    //converte in decimale
    //richiama le funzioni che partono da decimale
  }

  decToHexa(num: string)
  {}

  decToOct(num: string)
  {}

  decToBin(num: string)
  {}

  ngOnInit(): void {
  }

}
