import { Component, OnInit } from '@angular/core';
import { IspService } from '../isp.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ispCount:number;
  constructor(private ispService :IspService,private http:HttpClient) { }

  ngOnInit() {
  this.ispService.ispCount.subscribe(count=>{
    this.ispCount=count;
  });
  }

}
