import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './../shared/users.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

 

export class TableComponent implements OnInit  {
  constructor( private user_Service:UsersService) { }
  public Users: Array<any> | undefined;
  
  ngOnInit(): void {
    this.user_Service.getData().subscribe(res =>{
      
      this.Users = res.data

}
 )
}

}
