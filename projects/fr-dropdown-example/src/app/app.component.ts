import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fr-dropdown-example';

  countriesList = [
    {country : 'India', code : 1},
    {country : 'England', code : 2},
    {country : 'USA', code : 3},
    {country : 'Canada', code : 4},
    {country : 'France', code : 5},
    {country : 'Germeny', code : 6},
    {country : 'China', code : 7},
    {country : 'Pakistan', code : 8},
    {country : 'Nepal', code : 9},
    {country : 'Mianmar', code : 10},
    {country : 'SriLanka', code : 11},
  ];

  objDesc = {label : 'country', value : 'code', filter : true, filterBy : 'country'}

  constructor(){}

  onChange(value: any){
    console.log("Received from Child ---->", value);
  }
}
