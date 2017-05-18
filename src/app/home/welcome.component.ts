import { Component, OnInit } from '@angular/core';

import { ISchemaTabs } from '../SchemaTabs/schemaTabs';


@Component({
  selector: 'welcome-app',
  templateUrl: './app/home/welcome.component.html',
  styleUrls: ['./app/home/welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    schematabs: ISchemaTabs[];
}
