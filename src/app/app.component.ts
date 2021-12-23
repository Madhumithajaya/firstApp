import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filterTerm1: string;
  filterTerm2: string;

  userRecords = [{
      "sr_no": 1,
      "department_code": "D1001",
      "department_name": "Bsc IT",
      
    },
    {
      "sr_no": 2,
      "department_code": "D1002",
      "department_name": "Bcom",
      
    },
    {
      "sr_no": 3,
      "department_code": "D1003",
      "department_name": "BE",
      
    },
    {
      "sr_no": 4,
      "department_code": "D1004",
      "department_name": "B tech",
      
    },
    {
      "sr_no": 5,
      "department_code": "D1005",
      "department_name": "Bsc",
      
    },
    {
      "sr_no": 6,
      "department_code": "D1006",
      "department_name": "Bcom",
      
    },
    {
      "sr_no": 7,
      "department_code": "D1007",
      "department_name": "B tech",
      
    },
    {
      "sr_no": 8,
      "department_code": "D1008",
      "department_name": "BE",
      
    },
    {
      "sr_no": 9,
      "department_code": "D1009",
      "department_name": "Bcom",
      
    },
    {
      "sr_no": 10,
      "department_code": "D1010",
      "department_name": "BE",
      
    }
  ]

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
    
  }
}
